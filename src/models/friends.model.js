/* eslint-disable linebreak-style */
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const { Friends } = require('../services/friends/friends.class');
const { Users } = require('../services/users/users.class');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const friends = sequelizeClient.define('friends', {
    friend_link_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    friend_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id'
      }
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
    Friends.belongsToMany(Users, {as: 'SourceFriend', foreignKey: 'user_id'});
    Friends.belongsToMany(Users, {as: 'Friend', foreignKey: 'friend_id'});
  };

  return friends;
};
