const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const AppError = require("./src/utils/appError");
const globalErrorHandler = require("./src/controllers/errorController");

dotenv.config({
  path: "./config.env",
});

// Routes
const userRoute = require("./src/routes/userRoute");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/src/resources/publics`));

// Routes declaration
app.use("/api/users", userRoute);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

server.listen(process.env.NODE_APP_PORT_NUMBER || 3001, () =>
  console.log(
    `Server is running in port ${process.env.NODE_APP_PORT_NUMBER || 3001}`
  )
);
