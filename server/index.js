let express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");
let bodyParser = require("body-parser");


const app=express();

app.use(bodyParser.json());


app.get("/contacts",function(req,res,next){
 return res.json(contacts);
});


app.get("/vehicles",function(req,res,next){
  return res.json(vehicles);
  });



app.get("/products",function(req,res,next){
  return res.json(products);
  });

  app.get("/comments",function(req,res,next){
    return res.json(comments);
    });





app.get("/comments/:id",function(req,res,next){
 // find function to sift through variables 
  const comments= comments.find(c=>c.id == req.params.id);
});

app.get("/contacts/:id",function(req,res,next){
  const contacts = contacts.find(c=>c.id == req.params.id);
 return res.json(contacts)
});

app.get("/vehicles/:id",function(req,res,next){
  const vehicles = vehicles.find(v=>v.id == req.params.id);
  return res.json(vehicles);

});

app.get("/products/:id",function(req,res,next){
  const products = products.find(p=>p.id == req.params.id);
  return res.json(products);

});

// Create express routes to create one thing
//     Add .post() routes for /contacts, /vehicles, /comments, /products
//     Add the information from the body to the appropriate array
 

app.post("/comments",function(req,res,next){
  let newComment={
    body:req.body.body
  
  };
  comments.push(newComment);
  res.json(newComment);
});

app.post("/products",function(req,res,next){
  let newProduct={
    name:req.body.name,
    description:req.body.description,
    reviews:req.body.reviews,
    rating:req.body.rating,
    imgUrl:req.body.imgUrl,
    price:req.body.price,
    catergory:req.body.category
  };
  comments.push(newProduct);
  res.json(newProduct);
});

app.post("/vehicles",function(req,res,next){
  let newVehicles={
    
  
  };
  comments.push(newVehicles);
  res.json(newVehicles);
});

// requ
app.post("/contacts",function(req,res,next){
  let newContacts={
    name:req.body.name,
    occcupation:req.body.occupation,
    avatar:req.body.avatar
  };
  comments.push(newContacts);
  res.json(newContacts);
});


  















app.listen(3000,(err)=>{
  if (err){
    return console.log("error dat shit's brokeded")
  }
  console.log("YOU DOING GOOD BABBY");
});