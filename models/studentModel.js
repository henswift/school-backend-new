const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");

const Student = sequelize.define('student', {
  student_id: {
    primaryKey: true,
    type: DataTypes.INTEGER,

  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,

  },
  passedClass: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
}, {
  timestamps: false
});

sequelize.sync()
  .then(() => {
    console.log('synced')
  })
  .catch(err => {
    console.log('error')
  }) 

  console.log('file loaded')

module.exports = Student;