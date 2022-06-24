import Joi from "joi";

export const adminRegisterValidation = (req, res, next) => {
  console.log(req.body);

  const schema = Joi.object({
    fName: Joi.string().min(3).max(50).required(),
    lName: Joi.string().min(3).max(50).required(),
    Dob: Joi.date().allow(""),
    phone: Joi.number().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(50).required(),
    address: Joi.string().allow(""),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.json({
      status: "error",
      message: error.message,
    });
  }

  next();
};
