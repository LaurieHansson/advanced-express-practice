const express = require("express");
const app=express();
const commentsroute = require("./routes/commentRoute");
const productsroute = require("./routes/productsRoute");
const vehiclesroute = require("./routes/vehicleRoute");
const contactsroute = require("./routes/contactsRoute");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


app.use(bodyParser.json());

mongoose.Promise = global.Promise;
// mongoDB connection string
mongoose.connect("mongodb://aca-user:pass123@ds159563.mlab.com:59563/advanced-express-practice");

app.use("/", commentsroute);
app.use("/", productsroute);
app.use("/", vehiclesroute); 
app.use("/", contactsroute); 




app.listen(3000,(err)=>{
  if (err){
    return console.log("woykin hahd ah hadly woykin?")
  }
  console.log("YOU DOING GOOD BABBY");
});