const express = require("express");
const { checkAuthentication } = require("../middleware/authMiddleware");
const AuthenticUserRoutes = require("./AuthenticUserRoutes");
const JobApplicationRoutes = require("./jobApplicationRoutes");
const protectUserRouter = express.Router();
protectUserRouter.use(checkAuthentication)

protectUserRouter.use("/user", AuthenticUserRoutes);
protectUserRouter.use("/jobApplication", JobApplicationRoutes);

module.exports = protectUserRouter;