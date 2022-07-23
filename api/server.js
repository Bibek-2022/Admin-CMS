import "dotenv/config";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
const app = express();

const PORT = process.env.PORT || 8000;

// user middleware
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));

app.use(express.json());

//connect to db
import { mongoConnect } from "./src/config/dbConfig.js";
mongoConnect();

import registerLoginRouter from "./src/routers/registerLoginRouter.js";
import categoriesRouter from "./src/routers/categoriesRouter.js";
import paymentMethodRouter from "./src/routers/paymentMethodRouter.js";
import adminRouter from "./src/routers/adminRouter.js";

// api
app.use("/api/v1/register-login", registerLoginRouter),
  app.use("/api/v1/category", categoriesRouter);
app.use("/api/v1/payment-method", paymentMethodRouter);
app.use("/api/v1/admin", adminRouter);

app.get("/", (req, res) => {
  res.json({
    message: "you reach a e-commerce api",
  });
});

app.use((error, req, res, next) => {
  console.log(error.message);
  const status = error.status || 404;
  res.status(status).json({
    status: "error",
    message: error.message,
  });
});
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Server is running on port ${PORT}`);
});
