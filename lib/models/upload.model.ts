import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema({
    originalname: {type: String, required: true},
    path: {type: String, reuired: true},
    size: {type: Number},
    mimetype: {type: String},
    hash: {type: String, required: true},
    phone: {type: String, required: true},
    aadhaar: {type: String, required: true},
    createdAt: { type: Date, default: Date.now}
});

const UploadImageModel = mongoose.models.UploadImageModel || mongoose.model("UploadImageModel", uploadSchema);
export default UploadImageModel;