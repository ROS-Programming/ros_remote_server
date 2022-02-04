const mysql = require('mysql');
const client = require('./config/db.config.js');

var sql_insert = function(data, agg_active){
    if (agg_active == 1){
        var active_data = 0;
    }
    else{
        var active_data = 1;
    }
    client.query('UPDATE bmokey SET name = ?, active = ? WHERE id = 4',["A", 0], function(err, result){
        if (err){
            throw err;
        }
        else{
            console.log("1 record inserted");
        }
    });
    return active_data;
}
module.exports = sql_insert;
