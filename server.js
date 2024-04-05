require('dotenv').config()

const express = require('express');
const app = express()
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');


//middleware
app.use(express.json())
/*app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log(req.path, req.method)
    next()
})*/
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://your-frontend.com"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Private-Network", true);
  //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
  res.setHeader("Access-Control-Max-Age", 7200);

  next();
});

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
