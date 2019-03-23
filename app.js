// var db = require("../models");

// module.exports = function (app) {
//     app.get("/", function(app){
// // load index page
//         db.Article.find({

//         })
//     })
// }

var express = require('express');
var exphbs  = require('express-handlebars');
 
var app = express();
 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 

 
// app.listen(3000);