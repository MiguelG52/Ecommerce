import axios from "axios";

export const loadBestProducts = async(limit) =>{
    //call external node API
    let url = 'http://localhost:4000/api/products/best-products';
    return await axios.get(url)
}