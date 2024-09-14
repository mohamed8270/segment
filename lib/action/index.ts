import supabase from '@/utils/supabase/client';
import { nanoid } from "nanoid";

export async function handleUpload(file: any) {
    if(file) {
        try {
            const bucket: string = "medimages";
            const filename = nanoid();
            console.log(`This is file ${file}`, filename);
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

