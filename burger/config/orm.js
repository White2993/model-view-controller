var connection = require('../config/connection.js');


function questionMarks(num) {
  let numArr = [];

  for(let i = 0; i < num; i++) {
    numArr.push("?");
  }
  return numArr.toString();
}

function sql(val) {
  let arr = [];

  for (var key in val) {
    var newVal = val[key];

    if (Object.hasOwnProperty.call(val, key)) {
      if(typeof newVal === "string" && newVal.indexOf(" ") >= 0) {
        newVal = "'" + newVal + "'";
      }
      arr.push(key + "=" + newVal);
    }
  }
  return arr.toString();
}

let orm = {
  all: function(tableInput, cb) {
    let queryString = 'SELECT * FROM ' + tableInput + ';';
    connection.query(queryString, function(err, result) {
      if (err) {throw err}
      cb(result);
    });
  },
  create: function(table, cols, vals, cb) {
    let queryString = 'INSERT INTO ' + table;

    queryString += ' (';
    queryString += cols.toString();
    queryString += ') ';
    queryString += 'VALUES (';
    queryString += questionMarks(vals.length);
    queryString += ') ';

    connection.query(queryString, vals, function(err, result) {
      if (err) {throw err}
      cb(result);
    });
  },

  update: function(table, objColVals, condition, cb) {
    let queryString = 'UPDATE ' + table;

    queryString += 'SET ';
    queryString += sql(objColVals);
    queryString += 'WHERE ';
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {throw err}

      cb(result);
    });
  }
};
module.exports = orm;