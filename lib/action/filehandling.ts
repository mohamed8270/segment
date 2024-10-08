import supabase from '@/utils/supabase/client';
import { customAlphabet } from "nanoid";
import sha256 from 'crypto-js/sha256';

// uploads files to supabase DB
export async function handleUpload(file: any) {
    if(!file) return;
    try {
        const bucket: string = "medimages";
    
        // generating file name using nanoid
        const nanoid = customAlphabet('1234567890', 6);
        const filename = nanoid();
        const fileType = file.name.split(".").pop();
    
        const {data, error} = await supabase.storage.from(bucket).upload(`${filename}.${fileType}`, file);
        if(error) { 
            console.log('Error while uploading', error.message);
            return error.message;
        } else {
            const {data: file} = await supabase.storage.from(bucket).getPublicUrl(data?.path);
            return file?.publicUrl;
        }
    } catch (e: any) {
        console.log('Something went wrong', e.message);
        return e.message;
    }
} 

// hashing happens here
export async function handleHashing(file: any) {
    const reader = new FileReader();
    return new Promise((resolve, reject)  => {
        reader.onload = (e) => {
            const fileConten = e?.target?.result;
            const salt = customAlphabet('1234567890', 5);
            const hashed = sha256(fileConten as string + salt()).toString();
            resolve(hashed);
        };
        reader.onerror = (e) => reject(e);
        reader.readAsArrayBuffer(file);
    });
}

// file memory size
export function formatSize(bytes: any, decimalPoints= 2) {
    if(bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimalPoints < 0 ? 0 : decimalPoints;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", 'ZB', "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

// delete supabase file
export async function deleteSupabaseFile(path: string) {
    if(!path) return;
    try {
        const bucket: string = "medimages";

        const url = new URL(path);
        const pathnameParts = url.pathname.split('/');
        const filePath = pathnameParts.slice(6).join('/');
        console.log(filePath);

        const {data, error} = await supabase.storage.from(bucket).remove([filePath]);
        if(error) {
            console.log('Error while deleting', error.message);
            return error.message;
        }
    } catch (e: any) {
        console.log('Something went wrong', e.message);
    }
}

// masking aadhaar
export async function maskAadhaar(aadhaar: string) {
    const aadhaarNumber = aadhaar.toString();
    if(aadhaarNumber.length !== 12) throw new Error("Inavlid aadhaar!");
    const maskedAadhaar = 'xxxxxxxx' + aadhaarNumber.slice(-4);
    const formattedAadhaar = maskedAadhaar.match(/.{1,4}/g)?.join(' ');
    return formattedAadhaar;
}