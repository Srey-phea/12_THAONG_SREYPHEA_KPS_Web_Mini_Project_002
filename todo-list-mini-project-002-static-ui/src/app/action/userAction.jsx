'use server'

import { registerService } from "../service/register.service"


export async function registerUserAction(formData) {
 
    try{
        const data = await registerService(formData);
        return { success: data.status, message: data.message}
    } catch (e) {
        return { success: false, message: error.message}
    }
}