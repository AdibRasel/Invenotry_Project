//Basic Lib Import
const express = require("express");
const Router = require("./Src/routes/api");
const app = new express();
const BodyParser = require("body-parser");


// Security Middleware Lib Import
const RateLimiter = require("express-rate-limit");
const Helmet = require("helmet")
const MongoSanitize = require("express-mongo-sanitize");
const Xss = require("xss-clean");
const Hpp = require("hpp");
const Cors = require("cors");


// Database Configuration
const Mongose = require("mongoose");


// Security Middleware Implement 
app.use(Cors())
app.use(Helmet())
app.use(MongoSanitize())
app.use(Xss())
app.use(Hpp())


app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}))



// Body Parser Implement 
app.use(BodyParser.json())





// Request Rate Limite 
const Limiter =  RateLimiter(
        {
            windowMs: 15 * 60 * 1000, // 15 Minute
            max: 3000 // 3000 request
        }
    )
app.use(Limiter)



// Mongo DB Database Connection 
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Rasal_Hossain:mrhthvgvbnv@cluster0.u9f9cje.mongodb.net/?retryWrites=true&w=majority";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("Inventory_Project").command({ ping: 1 });
//     console.log("successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


  // Mongo DB Database Connection 
const uri = "mongodb+srv://Rasal_Hossain:mrhthvgvbnv@cluster0.u9f9cje.mongodb.net/?retryWrites=true&w=majority";

  Mongose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));


















// API Create, Or Routing Implement
app.use("/api/v1", Router)


// Undefine Route Or Undefine API 
app.use("*",(req, res)=>{
    res.status(404)
    res.json(
        {
            Status: "Not Found",
            Data:"Undefine Route Or Rong API"
        }
    )
})



module.exports = app;