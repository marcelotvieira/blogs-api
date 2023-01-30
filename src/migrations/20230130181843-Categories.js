'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('categories', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(255),
      }, 

    });  

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('categories');

  }  
};
