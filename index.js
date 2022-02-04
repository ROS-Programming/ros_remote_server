const express = require('express');
var edit_data = require('./file/edit_data.js');
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);
const port = process.env.PORT || 3000;

app.get('/', async(req, res) => {
    res.render(__dirname + '/index.html');
});
app.post('/', (req, res) => {
    console.log(req.body.key);
    const agg_active_data = 0;
    agg_active_data = edit_data(req.body.key, agg_active_data);
    console.log("check2");
    res.redirect('/');
});
app.listen(port, () => {
    console.log("Server Start");
});
