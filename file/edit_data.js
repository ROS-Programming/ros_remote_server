const mysql = require('mysql');

var sql_insert = function(data, agg_active, client){
    if (agg_active == 1){
        var active_data = 0;
    }
    else{
        var active_data = 1;
    }
    client.query('UPDATE bmokey SET name = ?, active = ? WHERE id = 4', [data, active_data], function(err, result){
        if (err){
            throw err;
        }
    });
    return active_data;
}
module.exports = sql_insert;
