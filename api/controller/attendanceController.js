const accountSchema = require('../model/account');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const template = require('../templates/emailTemplate');
const reminder = require('../templates/reminderTemplate');
require('dotenv').config();

let username;
let email;
let believer;
let password;
let timer;

const sendEmail = async (recipientEmail, subject, message, template) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SENDER_EMAIL,
            pass: process.env.EMAIL_APP_KEY
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        },
    });

    let mailOptions = {
        from: process.env.SENDER_EMAIL,
        to: recipientEmail,
        subject: subject,
        text: message,
        html: template
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

const startAttendance = (req, res) => {
    try {
        const user = jwt.decode(req.body.token, process.env.PRIVATE_KEY);
        username = user.username;
        password = user.password;

        accountSchema.findOne({username:username}).then(user=>{
            email = user.email;
            believer = user.believer;
        })

        timer = setTimeout(() => {
            clearTimeout(timer);
            timer = null;

            const mail = reminder(username, email, password);
            // Send email/notification here
            sendEmail(email, 'User is passing away', 'User has not marked attendance for 3 days.',mail).then(r => {
                console.log("Email sent");
            }, err => {
                console.log(err);
            });

            res.json({ data: { status: 200, message: username, email, believer } });
        }, 30000); //259200000
    }
    catch (e) {
        res.status(403).json({data:{status:403,message:'Invalid token'}});
    }
};

const stopAttendance = (req, res) => {
    try {
        timer = setTimeout(() => {
            clearTimeout(timer);
            timer = null;

            const mail = template(username, email, password, believer);

            sendEmail(believer, 'User is passed away', 'User has not marked attendance for 4 days.', mail).then(r => {
                console.log("Email sent");
            }, err => {
                console.log(err);
            });

            res.json({ data: { status: 200, message: 'You are passed away' } });
        }, 10000); //259200000
    }
    catch (e) {
        console.log(e);
    }
};

module.exports = {
    startAttendance,
    stopAttendance,
};