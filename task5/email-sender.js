var nodemailer = require('nodemailer');
var dotenv = require('dotenv');
dotenv.config(); // Load environment variables from.env file

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'anekeaustin@gmail.com',
    pass: process.env.PASS
  }
});

var mailOptions = {
  from: 'anekeaustin@gmail.com',
  to: 'okekedavid1333@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});