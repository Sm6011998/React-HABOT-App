import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../Common/Layout'
import { FadeLoader } from 'react-spinners'

const Details = () => {
    const { id } = useParams()
    const [datas, setData] = useState({})
    const[load,setLoad] = useState(false)


    const GetProducts = async () => {
        try {
            setLoad(true)
            const FinalProducts = await axios.get(`https://dummyjson.com/products/${id}`)
            setData(FinalProducts.data)
            console.log("params", FinalProducts.data)
            setLoad(false)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        GetProducts()
    }, [])
    return (
        <>
            <Layout>
                {
                    load?(
                        <>
                          <div style={{display:"flex",justifyContent:"center",height:"98vh",marginTop:"15rem"}}>
                        <FadeLoader
                                color="#7377de"
                                height={17}
                            />
                        </div>

                        </>

                    ):(
                        <>
                          <div className="container" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                    <div className="row">
                        <div className="col">
                            <div class="card" style={{ width: "25rem", }}>

                                <div class="card-body">
                                    <img src={datas.images} class="card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="card" style={{ width: "30rem",  }}>

                                <div class="card-body">
                                    <h5 class="card-title">{datas.title} [{datas.brand}]</h5>
                                    <p class="card-text">{datas.description}</p>
                                    <p class="card-text">${datas.price}    (Discount: {datas.discountPercentage}%)</p><p>Rating: <i class="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                                        <i class="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                                        <i class="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                                        <i class="fa-solid fa-star-half" style={{ color: "#FFD43B" }}></i>({datas.rating})</p>
                                </div>
                            </div>
                            <div style={{display:"flex",justifyContent:"center", marginTop:"3rem"}}>
                            <button style={{width:"12rem", height:"3rem"}} type="button" class="btn btn-warning">Buy Now</button>
                            </div>
                            

                        </div>
                    </div>
                   

                </div>
                        
                        </>
                    )
                }
              
            </Layout>


        </>
    )
}

export default Details