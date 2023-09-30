const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");
const sendEmail = require("../services/sendEmail");

const Survey = mongoose.model("surveys");

module.exports = (app) => {
    app.get("/api/surveys/thanks", (req, res) => {
      res.send("Thanks for voting!");
    });

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

      await sendEmail(survey, surveyTemplate(survey));
      await survey.save();
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  });
};
