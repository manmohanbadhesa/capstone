const express = require("express");
const cors = require("cors");
const app = express();

// loading variable from .env
require("dotenv").config({ path: "./.env" });

const PORT = process.env.PORT;

// import routes
const paymentRoutes = require("./routes/paymentRoutes");
const homeRoutes = require("./routes/homeRoutes");

// Middleware setup
app.use(express.static("public"));
app.use(cors());
app.use(express.json());


app.use("/", homeRoutes);
app.use("/paymentFive", paymentRoutes);

// test

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});