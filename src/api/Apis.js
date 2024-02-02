import axios from 'axios';

export async function prodactData(){
    const prodacts = await axios.get("https://fakestoreapiserver.reactbd.com/products");
    return prodacts
}