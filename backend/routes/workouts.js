const express = require("express");
const Workout = require("../models/workoutModel");

const router = express.Router();

// GET za sve workouts
router.get("/", (req, res) => {
  res.json({ mssg: "GET workouts" });
});

// GET za jedan workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET single workout" });
});

// POST za jedan workout
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE za jedan workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE new workout" });
});

// UPDATE za jedan workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a workout" });
});

module.exports = router;
