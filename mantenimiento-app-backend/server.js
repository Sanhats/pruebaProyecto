const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();


// Inicializar app
const app = express();

// Conectar a la base de datos
connectDB();

// Middleware
app.use(cors());
app.use(express.json({ extended: false }));

// Rutas
app.use("/api/auth", require("./routes/auth"));

// Puerto
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
