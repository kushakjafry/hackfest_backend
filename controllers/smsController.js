const messagingResponse = require("twilio").twiml.MessagingResponse;
module.exports = {
  recieveSMS: async function (req, res) {
    res.status(200).json(req.body);
  },
};
