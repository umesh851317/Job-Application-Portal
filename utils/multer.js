const multer = require("multer");
const storage = multer.memoryStorage();   // used to store file temporarily

const fileFilter = (req, file, cb) => {
       if (file.mimetype === "application/pdf") {
              cb(null, true);
       } else {
              return cb(new Error("Only PDF files are allowed."), false);
       }
};

const upload = multer({
       storage,
       fileFilter,
       limits: {
              fileSize: 5 * 1024 * 1024,    // 5 MB
       },
});

module.exports = upload;