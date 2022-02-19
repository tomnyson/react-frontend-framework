const { validationResult, body } = require("express-validator");

const createUserValidation = [
  body("username").isString(),
  body("password").isLength({ min: 5 }),
  body("role").isString(),
];

const validate = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({
      errors: errors.array(),
    });
  };
};

module.exports = {
  createUserValidation,
  validate
}