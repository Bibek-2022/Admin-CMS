import nodemailer from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
const sendMail = async (emailInfo) => {
  // create reusable transport er object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_SMTP,
    port: +process.env.MAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_USER, // generated ethereal user
      pass: process.env.MAIL_PASS, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail(emailInfo);

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};

export const sendAdminUserVerificationMail = (userObj) => {
  const link = `${process.env.DOMAIN}/admin-verification?e=${userObj.email}&c=${userObj.verificationCode}`;

  const emailInfo = {
    from: '"ABC store 👻" <noreply@e-commerce.com>', // sender address
    to: userObj.email, // list of receivers
    subject: "Account verification required", // Subject line
    text: `Hi ${userObj.fName} please follow the link to activate your admin account. ${link}`, // plain text body
    html: `
    <p> Hello ${userObj.fName} </p>
    <br/>
    <br/>
    <p>Please follow the link below to verify and activate your admin account </p>
    <br/>
    <br/>
    <a href= "${link}">${link}</a>  
    
    <br/>
    <br/>
    <>
    ================
    <br/>
    XYZ company 
    Customer Service Team
    <p/>
    
    
    `, // html body
  };
  sendMail(emailInfo);
};

export const profileUpdateNotification = (userObj) => {
  const emailInfo = {
    from: '"ABC store 👻" <noreply@e-commerce.com>', // sender address
    to: userObj.email, // list of receivers
    subject: "Your profile has been updated", // Subject line
    text: `Hi ${userObj.fName} We have just noticed your profile has updated. If this is not you, please contact us `, // plain text body
    html: `
    <p> Hello ${userObj.fName} </p>
    <br/>
    <br/>
    <p>We have just noticed your profile has updated. If this is not you, please contact us  </p>
    <br/>
    <br/>
    
    
    <br/>
    <br/>
    <>
    ================
    <br/>
    XYZ company 
    Customer Service Team
    <p/>
    
    
    `, // html body
  };
  sendMail(emailInfo);
};

export const emailPasswordResetOTP = (obj) => {
  const emailInfo = {
    from: '"ABC store 👻" <noreply@e-commerce.com>', // sender address
    to: obj.email, // list of receivers
    subject: "OTP for password", // Subject line
    text: `Hi ${obj.fName} Please use the following OTP to reset your password: ${obj.otp} `, // plain text body
    html: `
    <p> Hello ${obj.fName} </p>
    <br/>
    <br/>
    <p>Please use the following OTP to reset your password: {obj.otp}  </p>
    <br/>
    <br/>
    
    <span style="color:red; font-size: 2rem; font-weight:bolder;">${obj.otp}</span>
    <br/>
    <br/>
    <>
    ================
    <br/>
    XYZ company 
    Customer Service Team
    <p/>
    
    
    `, // html body
  };
  sendMail(emailInfo);
};
