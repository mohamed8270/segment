'use server';

import UploadImageModel from '../models/upload.model';
import {connectToDB} from '../mongoose';

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
        console.log(data);

        const res = new UploadImageModel(data);
        await res.save();

    } catch (e: any) {
        console.log("Can't upload to MongoDB!", e.message);
    }
}