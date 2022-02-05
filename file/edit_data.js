const mysql = require('mysql');

var sql_insert = function(data, agg_active, client){
    agg_active+=1;
    client.query('UPDATE bmokey SET name = ?, active = ? WHERE id = 4', [data, agg_active], function(err, result){
        if (err){
            throw err;
        }
    });
    return agg_active;
}
module.exports = sql_insert;
