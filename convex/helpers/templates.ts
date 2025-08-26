import { LOGO_URL } from "./constants";

export const APPLICATION_RECEIVED_TEMPLATE = ({
    firstName,
    lastName,
}: {
    firstName: string;
    lastName?: string;
}) => {
    const html = `
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Application Received</title>
  </head>
  <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f5f5f5; padding: 20px 0;">
      <tr>
        <td align="center">
          <!-- Main container -->
          <table cellpadding="0" cellspacing="0" border="0" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden;">
            
            <!-- Banner -->
            <tr>
              <td>
                <img src="${LOGO_URL}" alt="Company Logo" style="display: block; width: 100%; height: 150px; object-fit: contain;" />
              </td>
            </tr>

            <!-- Body content -->
            <tr>
              <td style="padding: 30px;">
                <h1 style="font-size: 20px; font-weight: bold; margin-bottom: 16px;">Hello ${firstName} ${lastName ?? ""},</h1>
                <p style="font-size: 14px; color: #333333; margin-bottom: 16px;">
                  Thank you for applying to join <strong>Highland Security Services Limited</strong>. 
                  We’ve received your application and our recruitment team is currently reviewing your details.
                </p>
                <p style="font-size: 14px; color: #333333; margin-bottom: 16px;">
                  If your qualifications meet our requirements, we’ll reach out to you for the next steps. 
                  In the meantime, feel free to learn more about us on our website and social platforms.
                </p>
                <p style="font-size: 14px; color: #333333; margin: 0;">
                  We appreciate your interest in becoming part of our team.  
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="padding: 20px;">
                <img src="${LOGO_URL}" alt="Highland Security Logo" height="30" style="display: block; margin: 0 auto;" />
                <p style="margin: 8px 0 0 0; font-size: 16px; font-weight: bold; color: #111111;">Highland Security Services</p>
                
                <!-- Social icons -->
                <table cellpadding="0" cellspacing="0" border="0" style="margin-top: 12px;">
                  <tr>
                    <td style="padding-right: 8px;">
                      <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="Facebook" height="30" width="30" style="display: block;" /></a>
                    </td>
                    <td style="padding-right: 8px;">
                      <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" height="30" width="30" style="display: block;" /></a>
                    </td>
                    <td>
                      <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" height="30" width="30" style="display: block;" /></a>
                    </td>
                  </tr>
                </table>

                <!-- Address -->
                <p style="margin: 8px 0 0 0; font-size: 14px; color: #555555;">30, SULE ABORE STREET OJODU IKEJA, LAGOS</p>
                <p style="margin: 4px 0 0 0; font-size: 14px; color: #555555;">info@highlandsecurityservices.com &nbsp; +234 813 754 8459</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `;
    return html;
};

export const USER_INVITATION_TEMPLATE = ({ email }: { email: string }) => {
    const html = `
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>User Invitation</title>
  </head>
  <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f5f5f5; padding: 20px 0;">
      <tr>
        <td align="center">
          <!-- Main Container -->
          <table cellpadding="0" cellspacing="0" border="0" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; padding: 20px;">
            <tr>
              <td>
                <h1 style="font-size: 20px; font-weight: bold; margin-bottom: 16px;">Hello ${email}</h1>
                <p style="font-size: 14px; color: #333333; margin: 0 0 12px 0;">Welcome to Highland Security Services</p>
                <p style="font-size: 14px; color: #333333; margin: 0 0 20px 0;">
                  An account has been created for you on the dashboard.<br/>
                  You can sign in using this email.
                </p>

                <!-- Login Email Row -->
                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom: 20px;">
                  <tr>
                    <td style="font-size: 14px; font-weight: bold; padding: 4px 0; color: #333333;">Login Email</td>
                    <td style="font-size: 14px; font-weight: bold; padding: 4px 0; color: #333333;">${email}</td>
                  </tr>
                </table>

                <p style="font-size: 14px; color: #333333; margin: 0;">Welcome Onboard</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

    return html;
};

export const COMPANY_EMAIL_TEMPLATE = ({
    firstName,
    body,
    lastName,
}: {
    firstName: string;
    lastName?: string;
    body: string;
}) => {
    const html = `
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Company Email</title>
  </head>
  <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f5f5f5; padding: 20px 0;">
      <tr>
        <td align="center">
          <!-- Main container -->
          <table cellpadding="0" cellspacing="0" border="0" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden;">
            <!-- Banner Image -->
            <tr>
              <td>
                <img src="${LOGO_URL}" alt="Company Logo" style="display: block; width: 100%; height: 200px; object-fit: contain;" />
              </td>
            </tr>

            <!-- Body content -->
            <tr>
              <td style="padding: 30px;">
                <h1 style="font-size: 20px; font-weight: bold; margin-bottom: 16px;">Hello ${firstName} ${lastName ?? ""}</h1>
                <p style="font-size: 14px; color: #333333; margin: 0;">${body}</p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="padding: 20px;">
                <img src="${LOGO_URL}" alt="Highland Security Logo" height="30" style="display: block; margin: 0 auto;" />
                <p style="margin: 8px 0 0 0; font-size: 16px; font-weight: bold; color: #111111;">Highland Security Services</p>
                <p style="margin: 4px 0 0 0; font-size: 16px; color: #555555;"></p>
                
                <!-- Social icons -->
                <table cellpadding="0" cellspacing="0" border="0" style="margin-top: 12px;">
                  <tr>
                    <td style="padding-right: 8px;">
                      <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1024px-2021_Facebook_icon.svg.png" alt="Facebook" height="36" width="36" style="display: block;" /></a>
                    </td>
                    <td style="padding-right: 8px;">
                      <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="X" height="36" width="36" style="display: block;" /></a>
                    </td>
                    <td>
                      <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" height="36" width="36" style="display: block;" /></a>
                    </td>
                  </tr>
                </table>

                <!-- Address -->
                <p style="margin: 8px 0 0 0; font-size: 14px; color: #555555;">30, SULE ABORE STREET OJODU IKEJA, LAGOS</p>
                <p style="margin: 4px 0 0 0; font-size: 14px; color: #555555;">info@highlandsecurityservices.com &nbsp; +234 813 754 8459,</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

    return html;
};
