const sendMail = require("../services/contactMail.service");
const sanitizeInput = require("../utils/sanitize");
const saveToGoogleSheet = require("../services/saveContactToGoogleSheet");

const handleContact = async (req, res, next) => {
  try {
    const { name, email, service, message } = req.body;

    const sanitized = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      service: sanitizeInput(service),
      message: sanitizeInput(message),
    };

    await sendMail(sanitized);
    await saveToGoogleSheet(sanitized);

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    next(error);
  }
};

module.exports = handleContact;