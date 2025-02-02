import asyncHandler from "express-async-handler";
import Certificate from "../models/certificateModel.js";
import { sendEmail } from "../middleware/sendMail.js";

const createCertificate = asyncHandler(async (req, res) => {
  const { amount } = req.body;

  console.log(req.user.fullName, "SAMPLE");
  let userEmail = req.user.email;
  console.log(userEmail);
  const certificate = new Certificate({
    name: req.user.fullName,
    email: req.user.email,
    amount,
  });

  const createdCertificate = await certificate.save();
  res.status(201).json(createdCertificate);

  await sendEmail({
    from: "Donation <kharelbaibhav7@gmail.com>",
    to: [userEmail],
    subject: "Certificate of donation",
    html: `<h1>Thank you for your donation</h1>
      <p>Click on the link below view your certificate...</p>
      <a href="http://localhost:5173/certificate/${createdCertificate._id}">
      click here To view details</a>
      `,
  });
});

const getCertificateById = asyncHandler(async (req, res) => {
  const certificate = await Certificate.findById(req.params.id);

  if (certificate) {
    res.json(certificate);
  } else {
    res.status(404);
    throw new Error("Certificate not found");
  }
});

export { createCertificate, getCertificateById };
