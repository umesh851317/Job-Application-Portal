const cloudinary = require("../config/cloudinary");

const uploadToCloudinary = (fileBuffer, originalName) => {
       return new Promise((resolve, reject) => {
              const fileName = originalName.replace(/\.pdf$/i, "");

              const stream = cloudinary.uploader.upload_stream(
                     {
                            resource_type: "raw",
                            folder: "Job-Portal/resumes",
                            public_id: `${fileName}.pdf`,
                     },
                     (error, result) => {
                            if (error) {
                                   reject(error);
                            } else {
                                   resolve(result);
                            }
                     }
              );
              stream.end(fileBuffer);
       });
};

module.exports = uploadToCloudinary;