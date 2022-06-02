import dotenv from 'dotenv';
dotenv.config()

const MONGO_URL = process.env.MONGO_URI;
const PORT = process.env.PORT;
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const ClOUDINARY_API_KEY = process.env.ClOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;


export  {   
        MONGO_URL, PORT, CLOUDINARY_API_SECRET, 
        CLOUDINARY_CLOUD_NAME, ClOUDINARY_API_KEY
    };