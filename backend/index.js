import express from 'express';
import { connectDB } from './utils/mongo.js';
import productRoute from './routes/product.route.js';
import fileUpload from 'express-fileupload';

const app = express();

//Mongo DB Connection
connectDB();

//middlewares
app.use(express.json());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))

//Routes
app.use('/api/products', productRoute);


app.listen(4000 , ()=>{
    console.log("Corriendo en puerto 4000");
})