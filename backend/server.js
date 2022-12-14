require("dotenv").config(); // trazimo dontenv / .config je metoda
// Preko .config kacimo env vars na process objekat
const express = require("express");
// Objekat koji koristimo za konekciju
const mongoose = require("mongoose");
// Pravimo drugi file koji ce da sadrzi sve rute
const workoutRoutes = require("./routes/workouts");
// kreiramo express app
const app = express();

// Middleware

// Gleda za data unutar reqesta (body), i kaci ga za req objekat
// req.body - primer
app.use(express.json());

// funkcija unutra se izvrsava svaki put kada dodje do req
app.use((req, res, next) => {
  console.log(req.path, req.method);
  // next je funkcija koja nastavlja dalje, bez nje kod staje ovde
  next();
});

// Rutes
app.use("/api/workouts", workoutRoutes);

// Povezi sa bazom (async)
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("slusam na", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
