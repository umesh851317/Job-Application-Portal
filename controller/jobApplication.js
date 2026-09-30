const Job = require("../models/Job");
const JobApplication = require("../models/JobApplication");

const applyForJob = async (req, res) => {
       try {
              const userId = req.user.id;
              const { jobId } = req.params;

              // Check job exists
              const job = await Job.findById(jobId);

              if (!job) {
                     return res.status(404).json({
                            success: false,
                            message: "Job not found",
                     });
              }

              // Check job is active
              if (!job.isActive) {
                     return res.status(400).json({
                            success: false,
                            message: "This job is no longer active",
                     });
              }

              // Check already applied
              const existingApplication = await JobApplication.findOne({
                     userId: userId,
                     jobId: jobId,
              });

              if (existingApplication) {
                     return res.status(400).json({
                            success: false,
                            message: "You have already applied for this job",
                     });
              }

              // Create application
              const application = await JobApplication.create({
                     userId: userId,
                     jobId: jobId,
              });

              return res.status(201).json({
                     success: true,
                     message: "Job application submitted successfully",
                     application,
              });
       } catch (error) {
              console.error(error);
              return res.status(500).json({
                     success: false,
                     message: "Failed to apply for job",
              });
       }
};


const getAllJobApplication = async (req, res) => {
       try {
              const userId = req.user.id;

              if (!userId) {
                     return res.status(404).json({
                            success: false,
                            message: "User not found...",
                     });
              }

              const application = await JobApplication.find({ userId: userId })

              if (!application) {
                     return res.status(404).json({
                            success: false,
                            message: "applications not found.....",
                     });
              }

              return res.status(201).json({
                     application,
                     success: true,
                     message: "job application fetch successfully....",
              });

       } catch (error) {
              console.log(error)
       }
}
module.exports = { applyForJob, getAllJobApplication }