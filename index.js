(async function () {
  const { join } = require("path");

  const express = require("express");
  const morgan = require("morgan");
  const cors = require("cors");

  const smsRouter = require("./routes/smsRouter");

  const app = express(); // Create app

  const publicFolder = join(__dirname, "public"); // Setup public folder

  const PORT = process.env.PORT || 3000;

  app.use(cors()); // Standard CORS setup
  app.use(express.json()); // Allow JSON body
  app.use(express.urlencoded({ extended: false })); // Allow urlencoded (GET) body
  app.use("/", express.static(publicFolder)); // Make public folder accessible

  app.use("/sms", smsRouter);
  // Google APIs controller - turned off to prevent conflicts
  // app.use(`${api}/applicants`, applicant);
  // app.use(`${api}/admins`, admin);
  // app.use(`${api}/applications`, application);
  // app.use(`${api}/messages`, message);
  // app.use(`${api}/confirm`, confirmRouter);
  // app.use(`/`, expressStaticGzip(publicFolder, {
  //   enableBrotli: true,
  //   orderPreference: ['br', 'gz']
  // }));
  // app.use(webapp);

  // const setup = require("./src/utils/setup");
  // if (
  //   process.env.NODE_ENV === "development" ||
  //   process.env.NODE_ENV === "test"
  // ) {
  //   await setup.sync();
  // } else {
  //   await setup.sync({ alter: true });
  // }
  // await setup.admin();
  // if (
  //   process.env.NODE_ENV === "development" ||
  //   process.env.NODE_ENV === "test"
  // ) {
  //   await setup.populate();
  // }

  app.listen(PORT, console.log(`Server is running at %s`, PORT));
})();
