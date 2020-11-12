'use strict';
//const models = require('../models');
module.exports = {
  up:  (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    return  queryInterface.bulkInsert('users', [{
      name: 'John Doe',
      is_public: false,
      user_name:'zz2'
    }], {});
    
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
