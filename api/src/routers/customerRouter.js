import express from "express";
const router = express.Router();

const fakeCustomers = [
  {
    _id: "12e",
    fName: "Prem",
    lName: "acharya",
    email: "asd@d.com",
    phone: "04123334",
  },
  {
    _id: "11e",
    fName: "Jon",
    lName: "Doe",
    email: "ad@d.com",
    phone: "041333334",
  },
];

router.get("/:_id?", (req, res, next) => {
  try {
    const { _id } = req.params;

    const customers = _id
      ? fakeCustomers.filter((item) => item?._id == _id)
      : fakeCustomers;

    res.json({
      status: "success",
      message: "the order lists",
      customers,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
