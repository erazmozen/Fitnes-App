const express = require("express");

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
router.post("/", (req, res) => {
  res.json({ mssg: "POST new workout" });
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
