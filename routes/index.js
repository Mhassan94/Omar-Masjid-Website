var express = require("express"),
    request = require("request");
var router = express.Router({mergeParams: true});

router.get("/", function(req, res){
    res.render("index")
})

router.get("/contactus", function(req, res){
    res.render("contactus");
})

router.get("/prayertiming", function(req,res){
    request("http://www.islamicfinder.us/index.php/api/prayer_times?country=US&zipcode=11235", function(error, response, body){
            var info = JSON.parse(body);
            res.send(info["results"]["Fajr"]);
        
    })
})

module.exports = router