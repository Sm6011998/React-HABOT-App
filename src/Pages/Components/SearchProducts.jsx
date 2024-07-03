import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FadeLoader } from 'react-spinners';
import Layout from '../Common/Layout';
import { Link } from 'react-router-dom';

const SearchProducts = () => {
    const [Search, setSearch] = useState([]);
    const [user, setUser] = useState('')
    const[loader,setLoader] = useState(false)
    const api = `https://dummyjson.com/products/search?q=phone`

    const getData = async () => {
        try {
            setLoader(true)
            const res = await axios.get(`${api}`)
            setSearch(res?.data?.products)
            setLoader(false)
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getData()
    }, [])
    console.log('kkk', Search);
  return (
    <>
     <Layout>
                <div className="container">
                <div style={{display:"flex",justifyContent:"center",border:"5px solid #60a5fa",backgroundColor:"#eef2ff",
                   }}> 
                    <h1>Search all the products here and it's details from the Suppliers</h1></div>
                </div>
                
                
                {
                    loader ? (
                        <>
                        <div style={{display:"flex",justifyContent:"center",height:"98vh",marginTop:"15rem"}}>
                        <FadeLoader
                                color="#7377de"
                                height={17}
                            />
                        </div>
                          

                        </>
                    ) : (
                        <>

                        <div className="container">
                        <div style={{ textAlign: "center", marginBottom: '20px', marginTop:"20px" }}>
                            <p style={{fontWeight:"700",fontSize:"25px", color:"#0369a1"}}>Search Your products Here!</p>
                   
                    <input style={{height:"4rem", width:"25rem",padding:"25px"}} type="text" 
                    placeholder='Search by Brand name here.....' onChange={(e) => setUser(e.target.value)} />
                </div>
                        </div>
                     
                            <div className="container">
                                <div className="row">
                                    {
                                        Search.filter((item)=>{
                                            if(item === ""){
                                                return item
                                            }
                                            else if(item.title.toLowerCase().includes(user.toLowerCase())){
                                               return item 
                                            }
                                        }).map((item) => {
                                            return (
                                                <>
                                                    <div className="col sm-3">
                                                        <div class="card" style={{ width: "18rem",marginTop:"2rem" }}>
                                                            <img src={item.images} class="card-img-top" alt="..." />
                                                            <div class="card-body">
                                                                <h5 class="card-title">{item.title} ({item.brand})</h5>
                                                                <p class="card-text">${item.price}</p><p>Rating: <i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                                                                <i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                                                                <i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                                                                <i class="fa-solid fa-star-half" style={{color: "#FFD43B"}}></i>({item.rating})</p>
                                                                <Link to={`/details/${item.id}`} class="btn btn-primary">Details</Link>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </>
                                            )
                                        })
                                    }
                                </div>
                               
                                
                            </div>
                        </>

                    )
                }



            </Layout>


    
    </>
  )
}

export default SearchProducts