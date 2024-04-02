const express = require('express')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    updateWorkout,
    deleteWorkout
} = require('../controllers/workoutController')

const router = express.Router()

// GET all elements
router.get('/', getWorkouts)

//GET a single element
router.get('/:id', getWorkout)

//POST a new workout
router.post('/', createWorkout)

//DELETE  a workout
router.delete('/:id', deleteWorkout)

//UPDATE a workout
router.patch('/:id', updateWorkout)
module.exports = router