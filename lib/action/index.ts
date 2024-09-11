import supabase from '@/utils/supabase/client';
import { nanoid } from "nanoid";

export async function name(input: any) {
    if(input) {
        const bucket: string = "medimages";
        const filename = nanoid();
        const {data, error} = await supabase.storage.from(bucket).upload(`${filename}.${input.name.split(".").pop()}`, input);
        if(error) { 
            console.log('Error while uploading', error.message);
        } else {
            const {data: file} = await supabase.storage.from(bucket).getPublicUrl(data?.path);
            console.log(file);
            return file?.publicUrl;
        }
        
    }
}