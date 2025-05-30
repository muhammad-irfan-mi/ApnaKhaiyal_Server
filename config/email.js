const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.SENDER_PASS
    },
    connectionTimeout: 60000,
    socketTimeout: 60000
});

module.exports = transport;
