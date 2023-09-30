const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const Mailer = require("../services/sendEmail");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");
const sendEmail = require("../services/sendEmail");

const Survey = mongoose.model("surveys");

module.exports = (app) => {
  app.post("/api/surveys", requireLogin, async (req, res) => {
    try {
      const { title, subject, body, recipients } = req.body;

      const survey = new Survey({
        title,
        subject,
        body,
        recipients: recipients
          .split(",")
          .map((email) => ({ email: email.trim() })),
        _user: req.user.id,
        dateSent: Date.now(),
      });

      const data = await sendEmail(survey, surveyTemplate(survey));
      return res.json(data);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  });
};
