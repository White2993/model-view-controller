var mysql = require('mysql');

var connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection({
    host: process.env.JAWSDB_URL,
    user: 'jhmo7n48xwkyyk34',
    password: 'rw8n2rc34t3n9vm5',
    port: 3306,
    database: 'j4g6um6x9r1cvyse'
  });
} else {
  connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  database: 'burgers_db',
  password: 'Goldensphinx596!'
})
}


connection.connect(function(err) {
  if (err) {
    console.error("ERROR CONNECTING: " + err.stack);
    return;
  }
  console.log("CONNECTED AS ID: " + connection.threadId);
});

module.exports = connection;