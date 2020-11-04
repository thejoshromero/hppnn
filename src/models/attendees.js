/* eslint-disable linebreak-style */
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const attendees = sequelizeClient.define('attendees', {
    status: {
      type: DataTypes.ENUM(
        'going',
        'invited','rejected'
      ),
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
  attendees.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
   
  };
  return attendees;
};
