const express = require("express");
//const morgan = require('morgan');

const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");
const oredrRouter = require("./routes/orderRoutes");
// const apiRouter = require("./routes/API");
const application = express();

// // 1) MIDDLEWARES
// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }

application.use(express.json());
//app.use(express.static(`${__dirname}/public`));

application.use((req, res, next) => {
  console.log("Hello from the middleware 👋");
  next();
});

application.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
application.use("/orders", oredrRouter);
application.use("/products", productRouter);
application.use("/", userRouter);
// app.use("/fruits", productRouter);
// app.use("/veggies", productRouter);
// app.use("/specials", productRouter);
// app.use("/API", apiRouter);
module.exports = application;
