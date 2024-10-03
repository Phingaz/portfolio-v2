"use server";
import nodemailer from "nodemailer";

export const sendMail = async ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}): Promise<{
  message: string;
  success: boolean;
  error: Error | null;
}> => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: true,
    port: 465,
    auth: {
      user: process.env.NODE_EMAIL,
      pass: process.env.NODE_APP_PASSWORD,
    },
  });

  const mailOptions = {
    to: "piinoya@gmail.com",
    subject: `New message from ${name}`,
    replyTo: "noreply@pnoya.com",
    text: `Hey Prosper, ${name} sent you a message: \n${message}.\n Thier Email: ${email}\n Date: ${new Date()}`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (err, data) {
      console.log("err", err);
      console.log("data", data);
      if (err) {
        reject({
          message: "Unable to send email, please try again later",
          error: err,
          success: false,
        });
      } else {
        resolve({
          message: "Email sent, thank you!",
          success: true,
          error: null,
        });
      }
    });
  });
};
