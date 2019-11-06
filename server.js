const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = process.env.PORT || 8080;

require('./routes')(app);

app.listen(PORT, ()=>{
  console.log('Listening on port', PORT);
})