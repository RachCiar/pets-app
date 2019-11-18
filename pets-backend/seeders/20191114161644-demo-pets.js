'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pets', null, {})
      .then(() => {
      return queryInterface.bulkInsert('Pets', [
        {
          name: 'Diesel',
          breed: 'Terrier',
          ownerId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Pepper',
          breed: 'Mut',
          ownerId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Boots',
          breed: 'Cat',
          ownerId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }], {});
      })
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
