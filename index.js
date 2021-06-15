var express = require('express');
var mysql = require('mysql');
var bodyparser = require('body-parser');
var faker = require('faker');

var software = express();
software.set("view engine", "ejs");
software.use(bodyparser.urlencoded({ extended: true }));
software.use(express.static(__dirname + "/public"));

var conn = mysql.createConnection({
    hostname: 'localhost',
    user: 'root',
    password: 'rehaan',
    database: 'self_db'
});

software.get("/", function (req, res) {
    res.render("mainpage");
   

});


software.post("/done", function (req, res) {
    var neww = {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile
    }

    conn.query("INSERT INTO users SET ?",neww,function(err,result){
        if(err) throw err;
        res.render("done");
    });   
    
});

// software.get("/details" , function(req,res){

// })

software.listen(8081, function (req, res) {
    console.log("Listening at 8081");
})
