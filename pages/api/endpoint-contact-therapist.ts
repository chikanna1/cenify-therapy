import type { NextApiRequest, NextApiResponse } from "next";
import Mailjet from "node-mailjet";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const mailjet = Mailjet.apiConnect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE
  );

  const { name, email, phoneNumber, message, therapist_email_address } =
    req.body;

  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "support@ikemdigital.com",
          Name: "Mailjet Pilot",
        },
        To: [
          {
            Email: therapist_email_address,
            Name: "Therapist_Name",
          },
        ],
        Subject: `You have a new email from ${name} at ${email}`,
        TextPart: `They wrote to you: ${message}`,
      },
    ],
  });

  request
    .then((result) => {
      console.log(result.body);
    })
    .catch((err) => {
      console.log(err.statusCode);
    });
}
