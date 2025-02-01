//********if send mail does not work  error *********
//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"  (use this commend at index.js file)

import nodemailer from "nodemailer";

let transporterInfo = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,

  auth: {
    user: "kharelbaibhav7@gmail.com",
    pass: "gezo lkvw seph jscc",
  },
};

export let sendEmail = async (mailInfo) => {
  try {
    let transporter = nodemailer.createTransport(transporterInfo);
    let info = await transporter.sendMail(mailInfo);
  } catch (error) {
    console.log("error has occurred", error.message);
  }
};
