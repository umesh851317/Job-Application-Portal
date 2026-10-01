const Job = require("../models/Job");
const JobApplication = require("../models/JobApplication");
const User = require("../models/User");
const uploadToCloudinary = require("../utils/cloudinary");

async function handlegetAllUserJob(req, res) {
       try {
              const allJob = await Job.find({ isActive: true })
              if (!allJob) {
                     return res.status(404).json({
                            succsess: false,
                            message: "no job found..."
                     })
              }
              return res.status(200).json({
                     allJob,
                     success: true,
                     message: "Fetch all user Job...."
              })
       } catch (error) {
              console.log(error);
              return res.status(500).json({
                     success: false,
                     message: error,
              });
       }
}

async function HandleUploadeResume(req, res) {
       try {
              const originalname = req.file.originalname
              const { id } = req.user
              if (!id) {
                     return res.status(401).json({
                            success: false,
                            message: "user id not found...."
                     })
              }
              const findUser = await User.findById(id)
              if (!findUser) {
                     return res.status(404).json({
                            success: false,
                            message: "user not found...."
                     })
              }
              const result = await uploadToCloudinary(
                     req.file.buffer,
                     req.file.originalname
              );
              if (!result) {
                     return res.json({
                            result,
                            success: false,
                            message: "Url not created...."
                     })
              }
              const resumeUrl = result.secure_url;

              const uploadeResume = await User.findByIdAndUpdate(
                     id,
                     {
                            $set: {
                                   resume: {
                                          fileName: originalname,
                                          fileUrl: resumeUrl,
                                          uploadedAt: new Date(),
                                   },
                            },
                     },
                     {
                            new: true,
                     }
              )
              if (!uploadeResume) {
                     return res.status(500).json({
                            success: false,
                            message: "resume Uploading failed...."
                     })
              }
              return res.status(200).json({
                     resume: uploadeResume.resume,
                     success: true,
                     message: "Uploade resume succefully...."
              })
       } catch (error) {
              console.log(error);
              return res.status(500).json({
                     error,
                     success: false,
                     message: "error......",
              });
       }
}

module.exports = { handlegetAllUserJob, HandleUploadeResume }