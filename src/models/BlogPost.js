const UserModel = require('./User');

const BlogPostModel = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'user_id',
            foreignKey: true,
        },
        published: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updated: {
            type: DataTypes.DATE,
        }
    }, { underscored: true, timestamps: false });

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User,
            { foreignKey: 'userId', as: 'users' });
        };


    return BlogPost;
};


module.exports = BlogPostModel;
