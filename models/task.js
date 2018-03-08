'use strict';
module.exports = (sequelize, DataTypes) => {
  var task = sequelize.define('task', {
    name: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    due_date: DataTypes.DATE
  }, {});
  task.associate = function(models) {
    // associations can be defined here
  };
  return task;
};
