const Sequelize = require('sequelize');
const config = require('../config/config');
const categServices = require('./category.service');
const { BlogPost } = require('../models');
const { PostCategory } = require('../models');
const { User } = require('../models');
const { Category } = require('../models');

const ApiError = require('../error/ApiError');

const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(config[env]);

const insert = async ({ body, user: { data: { userId } } }) => {
    const categories = await categServices.getAll();
    const categIds = categories.map((cat) => cat.id);
    const catNotFound = !(body.categoryIds.every((cat) => categIds.includes(cat)));

    if (catNotFound) ApiError.badRequest('one or more "categoryIds" not found');

    const response = await sequelize.transaction(async (t) => {
        const { dataValues: post } = await BlogPost
        .create({ userId, ...body }, { transaction: t });

        const data = categories.map((cat) => ({ categoryId: cat.id, postId: post.id }));
        await PostCategory.bulkCreate(data, { transaction: t });
        return post;
    });

    return response;
};

const getAll = async () => {
    const posts = BlogPost.findAll({
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories' },
        ] });
    return posts;
};

const getById = async (id) => {
    const post = await BlogPost.findOne({
        where: { id },
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories' },
        ] });
        if (!post) ApiError.notFound('Post does not exist');
    return post;
};

const updateById = async ({ user, params, body }) => {
    const updateTarget = await getById(params.id);
    if (!updateTarget) ApiError.notFound('Post does not exist');
    if (updateTarget.id !== user.data.userId) ApiError.unauthorized('Unauthorized user');

    const published = new Date().toISOString();
    await BlogPost.update(
        { published, ...body },
        { where: { id: params.id } },
        );
    const { dataValues } = await getById(params.id);
    return dataValues;
};

module.exports = {
    insert,
    getAll,
    getById,
    updateById,
};