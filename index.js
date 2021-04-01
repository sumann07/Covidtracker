const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/Auth");
const {authorize} = require("./middlewares/Auth");


const app = express();

const { NODE_PORT, NODE_ENV, DATABASE_URL } = process.env;
const isDevelopment = NODE_ENV === "development";
const PORT = process.env.PORT || NODE_PORT || 8000;


if (isDevelopment) {
    app.use(morgan("dev"));
  } else {
    app.use(morgan("combined"));
  }
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  if (isDevelopment) {
    //developement mode
    app.use(cors());
    //production mode
    //app.use(cors({origin:CLIENT_URL,optionsSuccessStatus:200}));
  }
  app.options('*', cors()) 
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  app.use("/api", authRoutes);
  
  
  mongoose
    .connect(DATABASE_URL, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useNewUrlParser: true,
    })
    .then(() => {
      app.listen(PORT, () => {
        console.log(
          `DB ${DATABASE_URL} is connected and server is running at port ${PORT}- ${NODE_PORT}`
        );
      });
    })
    .catch((err) => {
      console.error(`DB connection failed`);
    });
  