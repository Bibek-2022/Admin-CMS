import express, { Router } from "express";

const route = express.Router();

const fakeCustomer = {
  fName: "Prem",
  lName: "Sheres",
  email: "asd@adgfad",
  phone: "345678987654",
};
Router.get("/:_id", (req, res, next) => {
  try {
    const { _id } = req.params;

    const customers = _id
      ? fakeCustomer.filter((item) => item?._id == _id)
      : fakeCustomer;

    res.json({
      status: "success",
      message: "",
    });
  } catch (error) {
    next(error);
  }
});
