module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("User", {
    user_from: {
      type: DataTypes.STRING
    },
    user_to: DataTypes.STRING,
    read_stat: DataTypes.BOOLEAN,
    location: DataTypes.STRING,
    completed: DataTypes.DATE 
  });
  return Burger;
};
