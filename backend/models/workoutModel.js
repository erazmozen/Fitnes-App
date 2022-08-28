const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Definisemo strukturu dokumenta
const workoutSchema = new Schema(
  // skema za workout dokument
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  // dodaje kada je kreiran i kada je updateovan
  {
    timestamps: true,
  }
);

// Model koristi skemu, automatski stavlja plural i kreira kolekciju
// u odnosu na prvi argument // Workout.find() da koristimo
module.exports = mongoose.model("Workout", workoutSchema);
