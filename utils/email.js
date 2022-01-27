const nodemailer = require('nodemailer');

async function sendEmail(options) {
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      type: 'OAUTH2',
      user: process.env.EMAIL_USERNAME,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      accessToken: process.env.ACCESS_TOKEN,
      refreshToken: process.env.REFRESH_TOKEN,
    },
  });
  const mailOptions = {
    from: `"Reset Password" <longchaugia2005@gmail.com>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;
