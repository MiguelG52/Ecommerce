import mongoose from "mongoose";
import { MONGO_URL } from "../config.js";


const conn = {
    isConnected:false,
}
export const connectDB = async() =>{
    if(conn.isConnected) return;
    try{
        const { connections } = await mongoose.connect(MONGO_URL);
        conn.isConnected = connections[0].readyState;
    }catch(error){

    }
}

mongoose.connection.on("connected", () =>{
    console.log("Mongo is connected")
});
mongoose.connection.on("error", (error) =>{
    console.log(error)
})