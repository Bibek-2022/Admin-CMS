import Joi from "joi";
import {
  ADDRESS,
  DOB,
  EMAIL,
  FNAME,
  LNAME,
  PASSWORD,
  PHONE,
  SHORTSTR,
  LONGSTR,
  STATUS,
  joiValidator,
  OTP,
  PRICE,
  QTY,
  DATE,
} from "./validationConstant.js";

export const adminRegistrationValidation = (req, res, next) => {
  console.log(req.body);

  const schema = Joi.object({
    fName: FNAME,
    lName: LNAME,
    dob: DOB,
    phone: PHONE,
    email: EMAIL,
    password: PASSWORD,
    Address: ADDRESS,
  });

  joiValidator(schema, req, res, next);
};

export const loginValidation = (req, res, next) => {
  console.log(req.body);

  const schema = Joi.object({
    email: EMAIL,
    password: PASSWORD,
  });

  joiValidator(schema, req, res, next);
};

// category Validation
export const categoryValidation = (req, res, next) => {
  const schema = Joi.object({
    status: STATUS,
    name: SHORTSTR.required(),
    parentCatId: Joi.string().allow(null, ""),
  });

  joiValidator(schema, req, res, next);
};

// category Validation
export const updateCategoryValidation = (req, res, next) => {
  req.body.parentCatId = req.body.parentCatId ? req.body.parentCatId : null;
  const schema = Joi.object({
    _id: SHORTSTR.required(),
    status: STATUS,
    name: SHORTSTR.required(),
    parentCatId: SHORTSTR.allow(null, ""),
  });

  joiValidator(schema, req, res, next);
};

//
//payment Validation
export const paymentMethodValidation = (req, res, next) => {
  const schema = Joi.object({
    status: STATUS,
    name: SHORTSTR.required(),
    description: Joi.string().min(3).max(500).allow(null, ""),
  });

  joiValidator(schema, req, res, next);
};

//payment Validation
export const updatePaymentMethodValidation = (req, res, next) => {
  const schema = Joi.object({
    _id: SHORTSTR.required(),
    status: STATUS,
    name: SHORTSTR.required(),
    description: Joi.string().min(3).max(500).allow(null, ""),
  });

  joiValidator(schema, req, res, next);
};

//----------------------------------Admin Profile----------------------------------------
//admin Validation
export const updatePasswordValidation = (req, res, next) => {
  const schema = Joi.object({
    email: EMAIL,
    currentPassword: PASSWORD,
    password: PASSWORD,
  });

  joiValidator(schema, req, res, next);
};

// update

export const updateAdminProfileValidation = (req, res, next) => {
  const schema = Joi.object({
    fName: FNAME,
    lName: LNAME,
    dob: DOB,
    phone: PHONE,
    email: EMAIL,
    currentPassword: PASSWORD,
    Address: ADDRESS,
  });

  joiValidator(schema, req, res, next);
};

export const resetPasswordValidation = (req, res, next) => {
  const schema = Joi.object({
    email: EMAIL,
    password: PASSWORD,
    otp: OTP.required(),
  });

  joiValidator(schema, req, res, next);
};

// ======================Product Validation

export const newProductValidation = (req, res, next) => {
  console.log(req.body, "========");
  req.body.salesStartDate =
    req.body.salesStartDate === "null" ? null : req.body.salesStartDate;

  req.body.salesEndDate =
    req.body.salesEndDate === "null" ? null : req.body.salesEndDate;
  const schema = Joi.object({
    status: SHORTSTR,
    sku: SHORTSTR.required(),
    name: SHORTSTR.required(),
    description: LONGSTR,
    price: PRICE.required(),
    qty: QTY,
    salesPrice: PRICE,
    salesStartDate: DATE,
    salesEndDate: DATE,
    catID: SHORTSTR.allow("", null),
  });

  joiValidator(schema, req, res, next);
};
