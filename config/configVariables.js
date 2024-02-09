const dotenv = require('dotenv');

dotenv.config();

const {database,user: username, password, host} = process.env;

module.exports = {
  database, 
  username, 
  password, 
  host
}