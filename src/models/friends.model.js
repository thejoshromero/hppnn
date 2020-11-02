/* eslint-disable linebreak-style */
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
//const { Friends } = require('../services/friends/friends.class');
//const { Users } = require('../services/users/users.class');
//const { Friends } = require('../services/friends/friends.class');
//const { Users } = require('../services/users/users.class');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const friends = sequelizeClient.define('friends', {
 
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    friendId: {
      type: DataTypes.INTEGER,
      allowNull: false

    },
    status: {
      type: DataTypes.ENUM('Friend', 'Removed'),
      allowNull: false
    }
  }, { timestamps:false,
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  friends.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
   

  };
  
  return friends;
};
