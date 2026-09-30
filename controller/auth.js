const User = require("../models/User")
const bcrypt = require("bcrypt");
const { setUser } = require("../service/authCoder");

async function handleCreateUser(req, res) {
       try {
              console.log(req.body)
              const { name, email, gender, password } = req.body
              if (!name || !gender || !email || !password) {
                     return res.json({
                            success: false,
                            message: "All field required...."
                     })
              }
              const isEmailExist = await User.findOne({ email })

              if (isEmailExist) {
                     return res.json({
                            success: false,
                            message: "Email is already exist...."
                     })
              }

              const hashedPassword = await bcrypt.hash(password, 10);  // Hash the password

              if (!hashedPassword) {
                     return res.json({
                            success: false,
                            message: "Hashed password is not craated...."
                     })
              }

              const createUser = await User.create({
                     name: name,
                     gender: gender,
                     email: email,
                     password: hashedPassword
              })


              return res.json({
                     createUser,
                     success: true,
                     message: "User Create Succefully....."
              })
       } catch (error) {
              console.log("user create Errror", error)
       }

}

async function handleSignIn(req, res) {
       try {
              const { email, password } = req.body;
              if (!email || !password) {
                     return res.status(400).json({
                            success: false,
                            message: "Email and password are required.",
                     });
              }

              const user = await User.findOne({ email });
              if (!user) {
                     return res.status(401).json({
                            success: false,
                            message: "User not found.",
                     });
              }

              const isMatch = await bcrypt.compare(password, user.password);
              if (!isMatch) {
                     return res.status(401).json({
                            success: false,
                            message: "Invalid email or password.",
                     });
              }

              const tokenData = {
                     id: user._id,
                     email: user.email,
                     name: user.name
              }

              const token = setUser(tokenData);
              if (!token) {
                     return res.json({
                            success: false,
                            message: "Token not recieve......",
                     });
              }

              res.cookie("token", token, {
                     httpOnly: true,      // prevents JavaScript running in the browser
                     secure: process.env.NODE_ENV === "production",   // Only send this cookie over HTTPS.
                     sameSite: "lax",     // This helps protect against CSRF (Cross-Site Request Forgery) attacks.
                     maxAge: 60 * 60 * 1000,   // The cookie expires after 1 hours.(3,600,000ms)
              });

              return res.json({
                     success: true,
                     message: "login succefully......",
              });
       } catch (error) {
              console.log("Login Errror", error)
       }
}
module.exports = { handleCreateUser, handleSignIn }