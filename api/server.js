import "dotenv/config";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
const app = express();

const PORT = process.env.PORT || 8000;

// user middleware
app.use(helmet());
app.use(morgan("tiny"));

app.use(express.json());

//connect to db

app.get("/", (req, res) => {
  res.json({
    message: "Its ECommerce API",
  });
});
app.use((error, req, res) => {
  console.log(error.message);
  res.status = error.status || 404;
  res.json({
    status: "error",
    message: error.message,
  });
});
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Server is running on port ${PORT}`);
});
