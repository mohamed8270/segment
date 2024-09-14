import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema({
    filename: {type: String, required: true, unique: true},
    originalname: {type: String, required: true},
    path: {type: String, reuired: true},
    size: {type: Number},
    mimetype: {type: String},
    hash: {type: String, required: true},
    createdAt: { type: Date, default: Date.now}
});

const UploadImage = mongoose.models.UploadImage || mongoose.model("UploadImage", uploadSchema);
export default UploadImage;