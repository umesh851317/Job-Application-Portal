const express = require("express");
const {handleCreateJobs,handleGetAllJobs} = require("../controller/CreateJob");

const JobRouter = express.Router()

JobRouter.post("/", handleCreateJobs);
JobRouter.get("/", handleGetAllJobs);

module.exports = JobRouter