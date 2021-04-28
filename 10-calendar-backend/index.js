const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./database/config");
const cors = require("cors");

const app = express();

dbConnection();

app.use(cors());

// Dir public
app.use(express.static("public"));

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

app.listen(4000, () => {
  console.log(`Servidor corriendo en puerto ${4000}`);
});
