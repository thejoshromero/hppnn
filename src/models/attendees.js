/* eslint-disable linebreak-style */
const attendees = (sequelize, DataTypes) =>
  sequelize.define('attendees', {
    status: {
      type: DataTypes.ENUM(
        'going',
        'invited','rejected'
      ),
      allowNull: false
    }
  });

module.exports = attendees;