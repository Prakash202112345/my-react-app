
import axios from 'axios'

const API_BASE_URL = 'http://localhost:3000';

export const getNews = () => {
    return (
        axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-03-16&sortBy=publishedAt&apiKey=0853d64c16174f2d90359ebb6952c271')
        .then(response => {
            return response
        }).catch((err)=>{
            return err
        })
    )
};

export const getPromocode = () =>{
    return(
        axios.get(`${API_BASE_URL}/promocode`)
        .then(response=>{
            return response
        }).catch((err)=>{
            return err
        })
    )
};

export const createPromocode = (promoname,discount) =>{
    return(
        axios.post(`https://my-json-server.typicode.com/typicode/demo/posts/`,{name:promoname,discount:discount})
        .then((response)=>{
            return response.data
        }).catch((err)=>{
            return err
        })
    )
};