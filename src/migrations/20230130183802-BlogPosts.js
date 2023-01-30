'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('blog_posts', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      }, 
      title: {
        type: Sequelize.STRING(255),
      }, 
      content: { 
        type: Sequelize.STRING(255), 
      }, 
      user_id: { 
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        }
      }, 
      published:{ 
        type: DataTypes.DATE,
      },
      updated: {
        type: DataTypes.DATE,
      }
    });

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('blog_posts');

  }  

 };