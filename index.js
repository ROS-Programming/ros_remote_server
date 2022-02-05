const express = require('express');
var edit_data = require('./file/edit_data.js');
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);
const port = process.env.PORT || 3000;
var agg_active_data = 0;

app.get('/', async(req, res) => {
    res.render(__dirname + '/index.html');
});
app.post('/', function(req, res) {
    //gg_active_data = edit_data(req.body.key, agg_active_data);
    return res.json({key: req.body.key});
    //res.redirect('/');
});
app.listen(port, () => {
    console.log("Server Start");
});
