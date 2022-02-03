var mysql = require('mysql');

const client = mysql.createConnection({
  host: 'us-cdbr-east-05.cleardb.net',
  user: 'b6b6abc8db6210',
  password: '7fc953d9',
  database: 'heroku_3d881fa4b9623fa'
})

module.exports = client;