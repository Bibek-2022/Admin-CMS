import "dotenv/config";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 8000;
import path from "path";
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
import productRouter from "./src/routers/productRouter.js";
import adminRouter from "./src/routers/adminRouter.js";
import reviewRouter from "./src/routers/reviewRouter.js";
import customerRouter from "./src/routers/customerRouter.js";
import orderRouter from "./src/routers/orderRouter.js";
import { adminAuth } from "./src/middlewares/authMiddleware.js";

// api
app.use("/api/v1/register-login", registerLoginRouter),
  app.use("/api/v1/category", adminAuth, categoriesRouter);
app.use("/api/v1/payment-method", adminAuth, paymentMethodRouter);
app.use("/api/v1/products", adminAuth, productRouter);
app.use("/api/v1/customers", adminAuth, customerRouter);
app.use("/api/v1/orders", adminAuth, orderRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/review", reviewRouter);

//server public folder as static content folder
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.json({
    message: "you reach a e-commerce api",
  });
});

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.status || 404;
  res.status(status).json({
    status: "error",
    message: error.message,
  });
});
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Server is running on port ${PORT}`);
});
