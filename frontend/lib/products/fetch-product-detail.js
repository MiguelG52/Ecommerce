import axios from 'axios';

export const loadProducDetail = async(id) =>{
    let url = `http://localhost:4000/api/products/${id}`;
    return await axios.get(url)
}