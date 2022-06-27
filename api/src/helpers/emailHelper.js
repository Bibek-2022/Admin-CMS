import nodemailer from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
const sendMail = (emailInfo) => {
  // create reusable transporter object using the default SMTP transport
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
  let info = transporter.sendMail(emailInfo);

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};

export const sendAdminUserVarificationMail = (userObj) => {
  const link = `${process.env.DOMAIL}/admin-verification?e=${userObj.email}&c=${userObj.varificationCode}`;

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
