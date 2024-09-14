import supabase from '@/utils/supabase/client';
import { customAlphabet } from "nanoid";
import sha256 from 'crypto-js/sha256';

export async function handleUpload(file: any) {
    if(file) {
        try {
            const bucket: string = "medimages";
            const nanoid = customAlphabet('1234567890', 6);
            const filename = nanoid();
            console.log(`This is file ${file}`, filename);
            handleHashing(file);
            const {data, error} = await supabase.storage.from(bucket).upload(`${filename}.${file.name.split(".").pop()}`, file);
            if(error) { 
                console.log('Error while uploading', error.message);
            } else {
                const {data: file} = await supabase.storage.from(bucket).getPublicUrl(data?.path);
                console.log(file);
                return file?.publicUrl;
            }
        } catch (e: any) {
            console.log('Something went wrong', e.message);
        }
    }
    return 'Client side issue!';
} 

export async function handleHashing(file: any) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const fileContent = e.target?.result;
        const hashed = sha256(fileContent as string).toString();
        console.log(`This is hased ${hashed}`);
        return hashed;
    };
    reader.readAsArrayBuffer(file);
}