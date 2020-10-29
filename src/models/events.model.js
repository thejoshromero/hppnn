/* eslint-disable linebreak-style */
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const { EventTypes } = require('../services/event_types/event_types.class');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const events = sequelizeClient.define('events', {
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    geo_location: {
      type: DataTypes.GEOMETRY('POINT'),
      allowNull: true
    },
    street_1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    street_2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    state: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    zip_code: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_public: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    event_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image_source: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    creator_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    attendee_limit: {
      type: DataTypes.INTEGER,
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
  events.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    events.hasOne(EventTypes, {through: 'event_type'});
  };

  return events;
};
