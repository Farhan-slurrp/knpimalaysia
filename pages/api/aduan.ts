import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  require("dotenv").config();
  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL_NAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });

  console.log();

  const mailData = {
    from: process.env.EMAIL_NAME,
    to: process.env.EMAIL_NAME,
    subject: `${req.body.emailType} DARI ${req.body.name.toUpperCase()}`,
    text: req.body.message,
    html: `<i>Dikirim oleh: ${req.body.name}</i><br/><i>Nomor HP/WA: ${req.body.phoneNum}</i><br/><i>Nomor ${req.body.docType}: ${req.body.docNum}</i><br/><br/><br/><div>${req.body.message}</div>`,
    attachments: req.body.files || null,
  };

  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200);
}
