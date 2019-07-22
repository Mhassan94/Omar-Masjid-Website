var express = require("express"),
    request = require("request");
var router = express.Router({mergeParams: true});

router.get("/", function(req, res){
    res.render("index")
})

router.get("/aboutus", function(req, res){
    res.render("aboutus")
})

router.get("/prayers", function(req, res){
    request("http://www.islamicfinder.us/index.php/api/prayer_times?country=US&zipcode=11235", function(error, response, body){
        if(!error && response.statusCode == 200){
            var prayerTimings = JSON.parse(body);
            res.render("prayers", {prayerTimings : prayerTimings});
        }
    });
});

router.get("/prayertiming", function(req,res){
    request("http://www.islamicfinder.us/index.php/api/prayer_times?country=US&zipcode=11235", function(error, response, body){
            var info = JSON.parse(body);
            res.send(info["results"]["Fajr"]);
        
    })
})

module.exports = router