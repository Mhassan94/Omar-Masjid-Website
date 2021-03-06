var express = require("express"),
    request = require("request");
    nodemailer = require('nodemailer');
var router = express.Router({mergeParams: true});

//Contact Us Page
router.get("/contactus", function(req, res){
  res.render("contactus");
})

// POST route from contact form
router.post('/contactus', function (req, res) {
    let mailOpts, smtpTrans;
    smtpTrans = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS
      }
    });
    mailOpts = {
      from: req.body.name + ' &lt;' + req.body.email + '&gt;',
      to: GMAIL_USER,
      subject: req.body.subject,
      text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    };
    smtpTrans.sendMail(mailOpts, function (error, response) {
      if (error) {
        res.render('contact-failure');
      }
      else {
        res.render('contact-success');
      }
    });
  });

  module.exports = router

