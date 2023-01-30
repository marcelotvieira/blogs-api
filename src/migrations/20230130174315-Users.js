'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      display_name: {
        type: Sequelize.STRING(255),
      }, 
      email: { 
        type: Sequelize.STRING(255), 
      }, 
      password: { 
        type: Sequelize.STRING(255), 
      }, 
      image:{ 
        type: Sequelize.STRING(255), 

      }

    });

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('users');

  }   };