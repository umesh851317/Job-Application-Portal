const Job = require("../models/Job")

async function handleCreateJobs(req, res) {
       const { title, company, location, description, skills, experience, salary, employmentType, isActive, applicationDeadline } = req.body;
       if (!title || !company || !location || !description || !skills || !experience) {
              return res.json({
                     succsess: false,
                     message: "required field are not found...."
              })
       }

       const cretateJob = await Job.create({
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

       if (!cretateJob) {
              return res.json({
                     succsess: false,
                     message: "Job not created...."
              })
       }

       return res.json({
              cretateJob,
              success: true,
              message: "create job succefull "
       })
}
async function handleGetAllJobs(req, res) {
       const allJob = await Job.find()
       if (!allJob) {
              return res.json({
                     succsess: false,
                     message: "no job found..."
              })
       }
       return res.json({
              allJob,
              message: "get All job succefull "
       })
}

module.exports = { handleCreateJobs, handleGetAllJobs }