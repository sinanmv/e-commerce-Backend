//1 automatically load .env files into our projects
require('dotenv').config()

//2 import express
const express= require('express')

// import cors
const cors = require('cors')

// import db
require('./db/connection')

// import router
const router = require('./routes/router')

//3 create a server application 
const server =  express()

// to store port number 
const port = 5000

// use in server application 

server.use(cors())
server.use(express.json())
server.use(router)


// route = localhost 5000
server.get('/',(req,res)=>{
    res.status(200).json('E commerce service response')
})

// 4 to run the server application
server.listen(5000,()=>{
    console.log('server listening on port'+port);
})