var mysql = require('mysql');
var express = require('express')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  database: 'burgers_db',
  password: 'Goldensphinx596!'
})

connection.connect(function(err) {
  if (err) {
    console.error("ERROR CONNECTING: " + err.stack);
    return;
  }
  console.log("CONNECTED AS ID: " + connection.threadId);
});

module.exports = connection;