const express = require("express");
const { applyForJob, getAllJobApplication } = require("../controller/jobApplication");
const JobApplicationRoutes = express.Router();

JobApplicationRoutes.post("/:jobId", applyForJob)
JobApplicationRoutes.get("/", getAllJobApplication)

module.exports = JobApplicationRoutes