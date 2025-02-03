const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const classRouter = require("./routes/class");
const userRoute = require("./routes/user");

require("dotenv").config();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/api", classRouter);
app.use("/users", userRoute);

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  });

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
