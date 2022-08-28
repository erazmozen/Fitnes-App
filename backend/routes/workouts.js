const express = require("express");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// GET za sve workouts
router.get("/", getWorkouts);

// GET za jedan workout
router.get("/:id", getWorkout);

// POST za jedan workout
router.post("/", createWorkout);

// DELETE za jedan workout
router.delete("/:id", deleteWorkout);

// UPDATE za jedan workout
router.patch("/:id", updateWorkout);

module.exports = router;
