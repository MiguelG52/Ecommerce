import express from 'express';
import { connectDB } from './utils/mongo.js';
import productRoute from './routes/product.route.js';
import fileUpload from 'express-fileupload';
import cors from 'cors';

const app = express();

//Mongo DB Connection
connectDB();

//middlewares
app.use(express.json());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))
const whiteList = ['http://localhost:3000']
const corsOptions ={
    origin: function(origin, callback){
        if(whiteList.includes(origin)){
            callback(null, true);
        }else{
            callback(new Error("Error de cors"));
        }
    }
}



//Routes
app.use('/api/products', productRoute);


app.listen(4000 , ()=>{
    console.log("Corriendo en puerto 4000");
})