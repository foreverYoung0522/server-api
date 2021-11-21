const mysql = require('mysql');
const config = require('./db.json');

var pool = mysql.createPool(config);
const Schema = require('validate');

exports.reqBodySchema = new Schema({
  "name": {
      type :String,
      required : true,
      length:{min:1, max:30}
  },
})

exports.getConnection = function(callback) {
  pool.getConnection(function (err, conn) {
    if(!err) {
      callback(conn);
    }
  });
}

