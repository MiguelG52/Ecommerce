import axios from "axios";

export const loadBestProducts = async(limit) =>{
    //call external node API
    let url = process.env.EXTERNAL_API;
    return await axios.get(url)
}