const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
       {
              title: {
                     type: String,
                     required: true,
                     trim: true,
              },

              company: {
                     type: String,
                     required: true,
                     trim: true,
              },

              location: {
                     type: String,
                     required: true,
                     trim: true,
              },

              description: {
                     type: String,
                     required: true,
                     trim: true,
              },

              skills: {
                     type: [String],
                     required: true,
              },

              experience: {
                     type: String,
                     required: true,
                     trim: true,
              },

              salary: {
                     type: String,
                     trim: true,
              },

              employmentType: {
                     type: String,
                     enum: ["FULL_TIME", "PART_TIME", "INTERNSHIP", "CONTRACT"],
                     default: "FULL_TIME",
              },

              isActive: {
                     type: Boolean,
                     default: true,
              },

              applicationDeadline: {
                     type: Date,
              },
       },
       {
              timestamps: true,
       }
);

module.exports = mongoose.model("Job", jobSchema);