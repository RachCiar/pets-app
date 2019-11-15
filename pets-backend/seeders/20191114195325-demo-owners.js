'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('Owners', [
      {
        firstName: 'Rachel',
        lastName: 'Ciarlante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Allen',
        lastName: 'Ciarlante',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
