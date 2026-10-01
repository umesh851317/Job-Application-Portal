const Job = require("../models/Job")

async function handleCreateJobs(req, res) {
       const { title, company, location, description, skills, experience, salary, employmentType, isActive, applicationDeadline } = req.body;
       if (!title || !company || !location || !description || !skills || !experience) {
              return res.status(400).json({
                     succsess: false,
                     message: "required field are not found...."
              })
       }

       const createJob = await Job.create({
              title,
              company,
              location,
              description,
              skills,
              experience,
              salary,
              employmentType,
              isActive,
              applicationDeadline
       })

       if (!createJob) {
              return res.status(500).json({
                     success: false,
                     message: "Job could not be created."
              });
       }

       return res.status(201).json({
              success: true,
              createJob,
              message: "Job created successfully."
       });
}
async function handleGetAllJobs(req, res) {
       const allJob = await Job.find()
       if (!allJob) {
              return res.status(404).json({
                     success: false,
                     message: "no job found..."
              })
       }
       return res.status(200).json({
              allJob,
              success: true,
              message: "get All job succefull "
       })
}

module.exports = { handleCreateJobs, handleGetAllJobs }