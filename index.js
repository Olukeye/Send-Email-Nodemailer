const express = require('express');
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer');
const app = express();
const route = express.Router()


// you can add whatever template you wish to the front end....
app.get('/', (req,res) => {
  res.send("Hello World, Please check your email");
});

// get your user code and password from nodemailer
// this is my keys
const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "11ee3afd933042",
      pass: "ddd46f1d02f145"
    }
  });

let mailOptions = {
  from: 'sender@gmail.com',
  to: 'receiver@gmail.com', // you can add multiple receiver here 
  subject: 'Sending Email using Node.js',
  html:' <h1>WELCOM TO OUR NEWS LETTER!</h1><p>We hope to give you the best service ...</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: false
}));


app.listen(process.env.port || 2021 );
console.log('Web Server is listening at port '+ (process.env.port || 2021));