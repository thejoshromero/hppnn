/* eslint-disable linebreak-style */
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
// eslint-disable-next-line linebreak-style
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const eventTypes = sequelizeClient.define('event_types', {
 
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    image_source: {
      type: DataTypes.TEXT,
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
  eventTypes.associate = function (models) {
    // Define associations here 
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    eventTypes.hasMany(models.events, {});
  };

  return eventTypes;
};
