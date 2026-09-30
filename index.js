const dotenv = require("dotenv");
dotenv.config();                          // Load environment variables
const PORT = process.env.PORT;            // access the port number throgh env
const { connectMongoDb } = require("./config/db");

const app = require("./app");
const AuthRouter = require("./routes/AuthRoutes");
const handleCreateJobs = require("./controller/CreateJob");
const JobRouter = require("./routes/JobRoutes");

connectMongoDb(process.env.MONGO_URI)     // function to connect mongoDb
       .then(() => {
              console.log("MongoDB Connected....")
              app.listen(PORT, () => {
                     console.log(`Server running on port ${PORT}`)
              })
       }).catch(
              err => console.log("error:", err)
       );

app.get("/", (req, res) => {
       return res.json({
              success: true,
              message: "Job application Portal API..."
       })
})

app.use("/auth", AuthRouter)
app.use("/job", JobRouter)