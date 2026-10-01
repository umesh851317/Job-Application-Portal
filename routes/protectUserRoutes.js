const express = require("express");
const { checkAuthentication } = require("../middleware/authMiddleware");
const AuthenticUserRoutes = require("./AuthenticUserRoutes");
const JobApplicationRoutes = require("./jobApplicationRoutes");
const protectUserRouter = express.Router();
protectUserRouter.use(checkAuthentication)

protectUserRouter.use("/user", AuthenticUserRoutes);                  // for fetch the job and uploade resume 
protectUserRouter.use("/jobApplication", JobApplicationRoutes);       // for apply job and view application

module.exports = protectUserRouter;