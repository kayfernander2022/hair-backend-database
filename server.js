//Set up Express Server
/////////////////////////
// DEPENDENCIES
/////////////////////////
const express = require('express')//import express
const app = express()//create app object.
require('dotenv').config()//get .env variables
const {PORT = 3000, DATABASE_URL}=process.env
const mongoose = require('./models/connection')
const hairRouter=require('./controllers/hair')

/////////////////////////
// MIDDLEWARE IMPORT
/////////////////////////
const cors = require('cors')
const morgan = require('morgan')

/////////////////////////
// USE MIDDLEWARE
/////////////////////////
app.use(express.json())//needed when sending a body in the post and update routes. This middleware converts a JSON string from the api to a JSON object for data manipulation by the application. 
app.use(cors())
app.use(morgan('dev'))//in dev enviroment


/////////////////////////
// ROUTERS/ROUTES
/////////////////////////
// Home/Test route that says "hello world" to test server is working.
app.get("/", (req, res) => {
  //res.json let's us send a response as JSON data and not just text with res.send.
  res.json({
      response: "Hello World 2/23"
  })
  //OR
  //res.send('Hello World')
});

//hair controller/all hair routes
app.use('/hair', hairRouter)




/////////////////////////
// LISTENER/TURN ON SERVER
/////////////////////////
app.listen(PORT, ()=>{console.log(`Listening on port ${PORT}`)})