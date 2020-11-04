// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
//const { Friends } = require('../services/friends/friends.class');
//const { Users } = require('../services/users/users.class');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const users = sequelizeClient.define('users', {

    bio: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    geo_location: {
      type: DataTypes.GEOMETRY('POINT'),
      allowNull: true
    },
    image_source: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_public: {
      type: DataTypes.BOOLEAN,
      allowNull: false      
    },
    magic_hash: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    phone_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    show_bio: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    show_geo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    show_name: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    show_phone_number: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    user_name: {
      type: DataTypes.TEXT,
      allowNull: false
    }

  }, 
  { timestamps:false,
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  users.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    users.belongsToMany(models.users, {as: 'friend', through: 'friends', foreignKey: 'friendId'});
    users.belongsToMany(models.users, {as: 'user', through: 'friends', foreignKey: 'userId'});
    users.hasMany(models.events,{foreignKey: 'creator'});

  };

  return users;
};
