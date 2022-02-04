const mysql = require('mysql');
const client = require('./config/db.config.js');

var sql_insert = function(data, agg_active){
    if (agg_active == 0){
        var active_data = 1;
    }
    else{
        var active_data = 0;
    }
    client.query('UPDATE bmokey SET name = ?, active = ? WHERE id = 1394',[data, active_data], function(err, result){
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
