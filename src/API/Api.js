import axios from "axios"
export const BaseUrl = ("https://dummyjson.com/products")

export const ProductApi = async()=>{
    try{
        return await axios.get(`${BaseUrl}`)
    }
    catch(err){
        console.log(err)
    }

}

// lOGIN / Register API

let baseURL = ("https://webskitters-student.onrender.com")

export const Register_API = async (data)=>{
    try{
        return await axios.post(`${baseURL}/register`,data)
    }
    catch(err){
        console.log(err)
    }
}

export const Login_API = async (data)=>{
        return await axios.post(`${baseURL}/login`,data)

}


