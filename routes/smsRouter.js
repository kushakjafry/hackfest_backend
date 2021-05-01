const router = require("express").Router();
const smsController = require("../controllers/smsController");

router.post("/", smsController.recieveSMS);

module.exports = router;
