import cloudinary from 'cloudinary';
import {ClOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME} from '../config.js'

cloudinary.v2.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: ClOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
})

//params = filePath = the path where is saved the image
export const uploadImg = async (filePath, category, productName) =>{

    //Verify if the params
    if(!filePath || !category || !productName) throw new Error("The fieldPath, category and product name is required");
    
    //Verify strings
    if(typeof(category) !== "string" || typeof(productName) !== "string") throw new Error("The params should be strings");
    
    return await cloudinary.v2.uploader.upload(filePath,{
        folder: `MERN_Ecommerce/${category}/${productName}`
    })
}

//delete image from cloudinary
export const deleteImage = async (id) =>{
    return await cloudinary.v2.uploader.destroy(id);
}
