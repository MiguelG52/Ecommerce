import ProductModel from "../models/Product.js";
import { uploadImg, deleteImage } from "../libs/cloudinary.js";
import fs from 'fs-extra';

//get all data, *****dont use*********
export const getAllProducts = async(req, res) =>{
    const products = await ProductModel.find();
    return res.json(products);
}

//get a especific product by id
export const getProduct = async(req, res) =>{
    const { id } = req.params;
    try{
        const product = await ProductModel.findById(id);
        return res.json(product);
    }catch(error){
        return res.status(404).json({msg: `Ups, product not found`});
    }
}

//get Product by category
export const getProductByCategory = async(req, res) =>{
    const { category } = req.params;
    try{
        const productsList = await ProductModel.find({category: category});
        return res.json(productsList);
    }catch(error){
        return res.status(404).json({msg: `Ups, product not found`});
    }
}

export const createProduct = async(req, res) =>{
    if(req.method !== 'POST') return new Error(`The request should be POST and the type recive is: ${req.type}`);

    const {body} = req;
    let img = null;
    
    //if the img has been send then upload to cloudinary
    if(req.files.img){
        const {files} = req;
        const result = await uploadImg(files.img.tempFilePath, body.category, body.name);
        
        //save the response information in a variable "img"
        img = {
            url: result.secure_url,
            public_id: result.public_id
        }
        //overwrite img info to request body
        body.img = img;

        //delete the img from the server
        await fs.remove(files.img.tempFilePath);

        
        try{
            const product = new ProductModel(body);
            await product.save();
            return res.status(201).json({msg: "cool, your product is alredy online!"});
        }catch(error){
            return res.status(500).json({msg: `Ups, an error has occurred: ${error}`});
        }
    }else{
        return res.status(500).json({msg: `Ups: ${error}`});
    }
    
}

//update product information
export const updateProduct = async(req, res) =>{
    const { id } = req.params;
    const { body } = req;
    
    if(req.files){
        try {
            const { files } = req;
            //image information
            const img = null;
            //find the product
            const product = await ProductModel.findById(id);
            //delete image from cloudinary
            await deleteImage(product.img.public_id);
            
            let result = null;

            if(body.name) result = await uploadImg(files.img.tempFilePath, product.category, body.name);
            else if(body.category) result = await uploadImg(files.img.tempFilePath, body.category, product.name);
            else if(body.name && body.category) result = await uploadImg(files.img.tempFilePath, body.category, body.name);
            else if(!body.name && !body.category){
                result = await uploadImg(files.img.tempFilePath, product.category, product.name);
            }
            //save the image information from response
            img = {
                url: result.secure_url,
                public_id: result.public_id
            }
            body.img = img;
            //delete the img from the server
            await fs.remove(files.img.tempFilePath);

            await ProductModel.findByIdAndUpdate(id,body);            
            return res.status(201).json({msg: `cool, the product has been updated!`});

        } catch (error) {
            return res.status(500).json({msg: error});
        }
    }

    else{
        try {
            await ProductModel.findByIdAndUpdate(id, body, {new:true})
            return res.status(201).json({msg: `cool, the product has been updated!`});
        } catch (error) {
            return res.status(404).json({msg: `Ups, product not found`});
        }
    }
}
//delete product
export const deleteProduct = async(req, res) =>{
    const { id } = req.params;
    try {
        //save the product information, then delete the image from cloudinary
        const product = await ProductModel.findByIdAndDelete(id);
        await deleteImage(product.img.public_id);

        return res.status(204).json({msg: `cool, the product has been deleted!`});
    } catch (error) {
        return res.status(404).json({msg: `Ups, product not found`});
    }
}
