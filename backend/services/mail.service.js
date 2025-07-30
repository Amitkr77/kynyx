const transporter = require("../config/mail.config");

module.exports = async ({ name, email, service, message }) => {
  const mailOptions = {
    from: `"Kynyx Contact Form" <no-reply@homeasy.io>`,
    to: process.env.TO_EMAIL,
    subject: `Contact Request: ${service}`,
    html: `
      <h3>Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `,
    replyTo: email,
  };

  await transporter.sendMail(mailOptions);
};
