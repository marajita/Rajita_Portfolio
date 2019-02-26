module.exports = function(sequelize, DataTypes) {
  var Information = sequelize.define("Information", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    message: DataTypes.STRING,

  });
  return Information ;
};
