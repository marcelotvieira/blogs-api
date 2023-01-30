'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts_categories', {
      post_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'blog_posts',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }, 
      category_id: { 
        type: Sequelize.INTEGER, 
        references: { 
          model: 'categories', 
          key: 'id' 
        }, 
        onUpdate:'CASCADE', 
        onDelete:'SET NULL' 
      }

    });
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('posts_categories');

  }  

 };

