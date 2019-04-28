const express = require("express"),
      app = express(),
      bodyParser = require('body-parser');
      indexRoutes = require("./routes/index")

app.use(express.static('public'));
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(indexRoutes);

//Comment Added for Testing Purpose
//Only for second branch


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
