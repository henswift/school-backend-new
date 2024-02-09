const { Sequelize } = require("sequelize");
const { host, database, password, username } = require("./configVariables");

// const sequelize = new Sequelize('school', 'postgres', 'postgres', {
//   host: 'Localhost',
//   dialect: 'postgres'
// })

const sequelize = new Sequelize(database,username,password, {
  host: host,
  dialect: 'postgres',
  dialectOptions: {
    ssl: true
  },
  logging: false
})

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('connected to database');
  } catch (error) {
    console.log("unable to connect, error", error);
  }
}

module.exports = {
  sequelize,
  testConnection
}