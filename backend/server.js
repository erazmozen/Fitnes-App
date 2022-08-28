require("dotenv").config(); // trazimo dontenv / .config je metoda
// Preko .config kacimo env vars na process objekat
const express = require("express");

// kreiramo express app
const app = express();

// Middleware
// funkcija unutra se izvrsava svaki put kada dodje do req
app.use((req, res, next) => {
  console.log(req.path, req.method);
  // next je funkcija koja nastavlja dalje, bez nje kod staje ovde
  next();
});

// Rute
// obican get request, kada odemo na root pokrece funkciju
// req, res su objekti koji sadrze info za request i responce
app.get("/", (req, res) => {
  res.json({ message: "Radi li na ovoj ruti / ??" });
});

// slusamo za request
app.listen(process.env.PORT, () => {
  console.log("slusam na", process.env.PORT);
});
