require('dotenv').config()

const express = require('express');
const app = express()
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');


//middleware
app.use(express.json())
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "https://workout-buddy-x.netlify.app");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log(req.path, req.method)
    next()
})

//routes
const backendBaseURL="https://workout-buddy-backend-pmfl.onrender.com"
app.use('/api/workouts', workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, ()=>{
    console.log('Connected to db & listening on port 4000', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })
