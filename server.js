var express =   require('express');
var path    =   require('path');
var port    =   771;
var app =    express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var indexApi=require('./routes/IndexRoute.js');
var inventoryApi=require('./routes/InventoryRoute.js');
app.use('/', indexApi);
app.use('/api/inventory', inventoryApi);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//app.use(express.static(path.join(__dirname, 'client')));

app.listen(port, function(){
    console.log('hi i am listen port 771....');
});