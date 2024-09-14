'use server';

import {connectToDB} from '../mongoose';

export async function uploadToMongo(file: any) {
    if(!file) return;
    try {
        connectToDB();
    } catch (error) {
        
    }
}