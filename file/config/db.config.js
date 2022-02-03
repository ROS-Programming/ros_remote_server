var mysql = require('mysql');

const client = mysql.createConnection({
  host: 'us-cdbr-east-05.cleardb.net',
  user: 'b6b6abc8db6210',
  password: '7fc953d9',
  database: 'heroku_3d881fa4b9623fa'
})

function handleDisconnect() {
  client.connect(function(err) {
    if(err) {
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000);
    }
  });

  client.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      return handleDisconnect();
    } else {
      throw err;
    }
  });
}

module.exports = client;