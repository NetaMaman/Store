const express = require("express");
//const morgan = require('morgan');

const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");
// const apiRouter = require("./routes/API");
const app = express();

// // 1) MIDDLEWARES
// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }

app.use(express.json());
//app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log("Hello from the middleware 👋");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use("/users", userRouter);
// app.use("/fruits", productRouter);
// app.use("/veggies", productRouter);
// app.use("/specials", productRouter);
app.use("/products", productRouter);
// app.use("/API", apiRouter);
module.exports = app;
