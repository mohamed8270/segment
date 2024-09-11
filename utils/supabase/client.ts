import {createClient} from '@supabase/supabase-js'

export function supabaseClient() {
    const supabaseUrl:string = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseApi:string = process.env.NEXT_PUBLIC_SUPABASE_ANON!;
    const supabase = createClient(supabaseUrl, supabaseApi);
    return supabase;
}