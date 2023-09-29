const sgMail = require("@sendgrid/mail");
const keys = require("../config/keys");
sgMail.setApiKey(keys.sendGridKey);


module.exports = async ({ subject, recipients }, content) => {
  const msg = {
    to: recipients,
    from: {
      name: "Atman Shah",
      email: "atman1339@gmail.com"
    },
    subject: subject,
    html: content,
  };
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
};
