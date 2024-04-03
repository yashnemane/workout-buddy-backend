const express = require('express')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    updateWorkout,
    deleteWorkout
} = require('../controllers/workoutController')

const router = express.Router()
const backendBaseURL="https://workout-buddy-backend-pmfl.onrender.com"

// GET all elements
router.get(`${backendBaseURL}/`, getWorkouts)

//GET a single element
router.get(`${backendBaseURL}/:id`, getWorkout)

//POST a new workout
router.post(`${backendBaseURL}/`, createWorkout)

//DELETE  a workout
router.delete(`${backendBaseURL}/:id`, deleteWorkout)

//UPDATE a workout
router.patch(`${backendBaseURL}/:id`, updateWorkout)
module.exports = router