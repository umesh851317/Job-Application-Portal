const express = require("express");
const { handlegetAllUserJob, HandleUploadeResume } = require("../controller/AuthUser");
const upload = require("../utils/multer");
const AuthenticUserRoutes = express.Router();

AuthenticUserRoutes.get("/", handlegetAllUserJob);

AuthenticUserRoutes.get("/clear", (req, res) => {
       res.clearCookie("token");
       return res.json({
              message: "cookies clear succefully...."
       })
});

AuthenticUserRoutes.post("/",      // for upload resume...
       upload.single("resume"),    // recieved file
       HandleUploadeResume
);

module.exports = AuthenticUserRoutes;