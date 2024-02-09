const express = require('express');
const { testConnection } = require('./config/connection');
const Student = require('./models/studentModel');

const app = express();
const port = 8000;

app.use(express.json());

testConnection();



app.listen(port, () => {
  console.log('listening on port', port);
})


