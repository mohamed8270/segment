'use server';

import UploadImageModel from '../models/upload.model';
import {connectToDB} from '../mongoose';
import { deleteSupabaseFile } from './filehandling';

export async function uploadToMongo(file: any, originalname: any, size: any, mimetype: any, hash: any) {
    if(!file) return;
    try {
        connectToDB();

        const data = {
            originalname: originalname,
            path: file,
            size: size,
            mimetype: mimetype,
            hash: hash,
        };
        // console.log(data);

        const res = new UploadImageModel(data);
        await res.save();

    } catch (e: any) {
        console.log("Can't upload to MongoDB!", e.message);
    }
}

// retreive all data
export async function getAllData() {
    try {
        connectToDB();
        const imageData = await UploadImageModel.find();
        return imageData;
    } catch (e: any) {
        console.log("Error retreiving data", e.message);
    }
}

// delete data from mongoDB
export async function deleteMongoData(id: string, path: string) {
    try {
        connectToDB();
        deleteSupabaseFile(path);
        await UploadImageModel.findByIdAndDelete(id);
    } catch (e: any) {
        console.log("Error deleting data", e.message);
    }
}