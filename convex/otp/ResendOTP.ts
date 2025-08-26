import { Email } from "@convex-dev/auth/providers/Email";
import { Resend as ResendAPI } from "resend";
import { generateNumericCode } from "../helpers/utils";

// 10-characters long string consisting of upper case letters
export const ResendOTP = Email({
    id: "resend-otp",
    apiKey: process.env.AUTH_RESEND_KEY,
    maxAge: 60 * 20,
    async generateVerificationToken() {
        return generateNumericCode(6);
    },
    async sendVerificationRequest({ identifier: email, token, expires }) {
        const resend = new ResendAPI(process.env.AUTH_RESEND_KEY);

        const html = `
        <html>
          <head>
            <style>
              body {
                font-family: sans-serif;
                padding: 20px;
                background-color: #f5f5f5;
              }
              .container {
                background: #fff;
                padding: 30px;
                border-radius: 8px;
                max-width: 500px;
                margin: auto;
                box-shadow: 0 4px 10px rgba(0,0,0,0.05);
              }
              .code {
                font-size: 32px;
                font-weight: bold;
                margin: 20px 0;
              }
              .info {
                font-size: 14px;
                color: #666;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h2>Verify your account</h2>
              <p>Please use the code below to complete your sign in:</p>
              <div class="code">${token}</div>
              <p class="info">This code expires in ${Math.ceil((+expires - Date.now()) / (60 * 1000))} minutes.</p>
            </div>
          </body>
        </html>
      `;

        const { error } = await resend.emails.send({
            // TODO: Update with your app name and email address
            from:
                process.env.AUTH_EMAIL ??
                "Highland Security Admin Verification <auth@highlandsecurityservices.com>",
            to: [email],
            // TODO: Update with your app name
            subject: `Verify Your Account`,
            html,
        });

        if (error) {
            throw new Error(JSON.stringify(error));
        }
    },
});
