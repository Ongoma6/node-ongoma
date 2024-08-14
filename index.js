var express = require("express");
var app =express();
var path = require('path');

var bodyParser = require("body-parser");
//create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static('public'));

  app.get('/',function(req,res){

})
app.get('/process_get', function(req, res){

})

  app.post('/process_post', urlencodedParser, function(req, res){
    //prepare output in JSON format 
    response ={
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));

  })

app.listen(5000, function(){
    console.log('express app running at http://127.0.0.1:5000/');
})
