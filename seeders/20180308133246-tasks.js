'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tasks', [
         {
             name: 'John',
             priority: 1,
             due_date: new Date(),
             createdAt: new Date(),
             updatedAt: new Date()
         },
         {
             name: 'April',
             priority: 3,
             due_date: new Date(),
             createdAt: new Date(),
             updatedAt: new Date()
         },
         {
             name: 'Levke',
             priority: 10,
             due_date: new Date(),
             createdAt: new Date(),
             updatedAt: new Date()
         }
     ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
