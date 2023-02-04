

const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        displayName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'display_name'
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
        }
    }, { underscored: true, timestamps: false });

    User.associate = (models) => {
        User.hasMany(models.BlogPost,
            { foreignKey: 'userId', as: 'blog_posts' });
        };

    // const BlogPost = BlogPostModel(sequelize, DataTypes);

    return User;

};

module.exports = UserModel;


