'use server'

import { registerService } from "../service/register.service"
import { updateFavById } from "../service/workspace.service";


export async function registerUserAction(formData) {
 
    try{
        const data = await registerService(formData);
        return { success: data.status, message: data.message}
    } catch (e) {
        return { success: false, message: error.message}
    }
}



export async function updateFavByWorkspaceId(workspaceId, isFav) {
    console.log(workspaceId,isFav)
    try{
        await updateFavById(workspaceId, isFav);
        return { success: true, message: ""}
    } catch (e) {
        return { success: false, message: "message"}
    }
}