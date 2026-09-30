const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
       {
              name: {
                     type: String,
                     required: true,
                     trim: true,
              },
              gender: {
                     type: String,
                     enum: ["MALE", "FEMALE", "OTHER"],
              },
              email: {
                     type: String,
                     required: true,
                     unique: true,
                     lowercase: true,
                     trim: true,
              },

              password: {
                     type: String,
                     required: true,
              },

              resume: {
                     fileName: String,
                     fileUrl: String,
                     uploadedAt: Date,
              },
       },
       {
              timestamps: true,
       }
);
const User = mongoose.model("User", userSchema);

module.exports = User;