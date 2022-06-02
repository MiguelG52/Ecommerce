import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true, "The product name is required"],
            trim:true,
            unique:true
        },
        price:{
            type:Number,
            required:[true, "The price is required"],
            trim:true,
            min:0
        },
        stock:{
            type:Number,
            required:[true, "The quantity is required"],
            trim:true,
            min:[0]
        },
        description:{
            type:String,
            required:[true, "The description is required"],
            trim:true,
            maxlength:[800, "The descrion should have 800 characteres or less"]
        },
        category:{
            type:String,
            required:[true, "The category is required"],
            trim:true
        }
        ,
        img:{
            url:String,
            public_id:String,
        }
    },
    {
        timestamps:true,
    }
);

const product = mongoose.models.Product || mongoose.model("Product", productSchema);
export default product;