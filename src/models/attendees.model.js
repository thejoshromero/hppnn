/* eslint-disable linebreak-style */
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const { Events } = require('../services/events/events.class');
const { Users } = require('../services/users/users.class');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const attendees = sequelizeClient.define('attendees', {
    attendee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('Going', 'Interested', 'Invited', 'Not Going'),
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
  attendees.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    attendees.hasOne(Events, {through: 'event_id'});
    attendees.hasOne(Users, {through: 'user_id'});
  };

  return attendees;
};
