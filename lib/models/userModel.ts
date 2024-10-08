import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {type: String, required: [true, "Please provide first name"]},
    lastname: {type: String, required: [true, "Please provide last name"]},
    username: {type: String, required: [true, "Please provide username"], unique: true},
    email: {type: String, required: [true, "Please provide email"],  unique: true},
    phone: {type: String, required: [true, "Please provide phone number"], unique: true},
    aadhaar: {type: String, required: [true, "Please provide aadhaar number"], unique: true},
    password: {type: String, required: [true, "Please provide password"]},
    isVerified: {type: Boolean, default: false},
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
});

const Users = mongoose.models.users || mongoose.model("users", userSchema);

export default Users;