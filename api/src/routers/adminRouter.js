import express from "express";
const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "todo get method",
    });
  } catch (error) {
    next(error);
  }
});

// update info
router.put("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "todo get method",
    });
  } catch (error) {
    next(error);
  }
});

// update admin password as logged in
router.patch("/", (req, res, next) => {
  console.log(req.body);
  try {
    res.json({
      status: "success",
      message: "dddoing",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
