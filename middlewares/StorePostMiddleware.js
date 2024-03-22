const { body, validationResult } = require("express-validator");

// Define validation middleware for creating a new post
const validatePostCreation = [
  body("title").notEmpty().trim().isString().withMessage("Title is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("user").notEmpty().withMessage("User is required"),

  // Middleware to check the result of the validation
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const messages = errors.array().map((error) => error.msg);

      return res.status(400).json({ errors: messages });
    }
    next();
  },
];

module.exports = validatePostCreation;
