const express = require("express")
const { handleCreateUser, handleSignIn } = require("../controller/auth")

const AuthRouter = express.Router()

AuthRouter.post("/signUp", handleCreateUser);
AuthRouter.post("/signIn", handleSignIn);

module.exports = AuthRouter