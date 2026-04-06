
import mongoose from "mongoose"; 

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ["owner", "user"],
      default: "user"
    },
    image: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true   // ✅ BOOLEAN (not string)
  }
);

const User = mongoose.model("User", userSchema);

export default User;