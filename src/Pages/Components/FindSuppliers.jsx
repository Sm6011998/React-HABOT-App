import React, { useEffect, useState } from 'react'
import { ProductApi } from '../../API/Api'
import axios from 'axios'
import Layout from '../Common/Layout'
import { ClipLoader, FadeLoader } from 'react-spinners'
import { Link } from 'react-router-dom'

const FindSuppliers = () => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState([])
    const [user, setUser] = useState('')
    const [load, setLoad] = useState(6)
    const [loader, setLoader] = useState(false)

    const GetProducts = async () => {
        try {
            setLoader(true)
            const FinalProducts = await ProductApi()
            setProducts(FinalProducts.data.products)
            console.log(FinalProducts.data.products)

            const SearchApiData = await axios.get(`https://dummyjson.com/products/search?q=phone`)
            setSearch(SearchApiData.data.products)
            console.log("search", SearchApiData.data.products)
            setLoader(false)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        GetProducts()
    }, [])

    const Loadmore = () => {
        setLoad(load + 6)
    }
    return (
        <>
            <Layout>
                <div className="container">
                <div style={{display:"flex",justifyContent:"center",border:"5px solid #60a5fa",backgroundColor:"#eef2ff",
                   }}> 
                    <h1>Find all the products and it's details from  the Suppliers</h1></div>
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
                                <div className="row">
                                    {
                                        products.slice(0, load).map((item) => {
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
                                                                <i class="fa-solid fa-star-half" style={{color: "#FFD43B"}}></i>{item.rating}</p>
                                                                <Link to={`/details/${item.id}`} class="btn btn-primary">Details</Link>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </>
                                            )
                                        })
                                    }
                                </div>
                                <div style={{display:"flex",justifyContent:"center",marginTop:"3rem",marginBottom:"3rem"}}>
                                <button type="button" class="btn btn-info" onClick={Loadmore}>{
                                    loader?(
                                        <>
                                        <ClipLoader color="#e17373" />
                                        </>
                                    ):(
                                        <>
                                        Load More
                                        
                                        </>
                                    )}

                                </button>
                                </div>
                                
                            </div>
                        </>

                    )
                }



            </Layout>

        </>
    )
}

export default FindSuppliers