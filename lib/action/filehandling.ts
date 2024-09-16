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
    reader.onload = (e) => {
        const fileContent = e.target?.result;
        const hashed = sha256(fileContent as string).toString();
        return hashed.toString();
    };
    reader.readAsArrayBuffer(file);
}