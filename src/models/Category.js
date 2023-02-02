

const CategoryModel = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'display_name'
        },
    }, { underscored: true, timestamps: false });

    return Category;

};

module.exports = CategoryModel;


