const mongoose = require("mongoose");

const jobApplicationSchema = new mongoose.Schema(
       {
              userId: {
                     type: mongoose.Schema.Types.ObjectId,
                     ref: "User",
                     required: true,
              },

              jobId: {
                     type: mongoose.Schema.Types.ObjectId,
                     ref: "Job",
                     required: true,
              },

              status: {
                     type: String,
                     enum: ["APPLIED", "REVIEWING", "SHORTLISTED", "REJECTED", "HIRED"],
                     default: "APPLIED",
              },

              appliedAt: {
                     type: Date,
                     default: Date.now,
              },
       },
       { timestamps: true }
);

const JobApplication = mongoose.model("jobApplication", jobApplicationSchema);
module.exports = JobApplication