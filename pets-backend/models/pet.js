'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true
    },
    breed: DataTypes.STRING,
    ownerId: DataTypes.INTEGER
  }, {});
  Pet.associate = function (models) {
    Pet.belongsTo(models.Owner, { foreignKey: 'ownerId' })
  };
  
  return Pet;
};