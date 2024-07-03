import React from 'react'
import imh1 from '../Image/Banner.png'
import Layout from './Common/Layout'
import mail from '../Image/Image.png'
import loc from '../Image/Location.png'
import { Link } from 'react-router-dom'
import vdeo from '../Image/UTube.png'
import vdeoicon from '../Image/Vdeo icon.png'
import './Home.css'
import tick from "../Image/Tick.png"
import icon1 from '../Image/Icon1.png'
import icon2 from '../Image/Icon2.png'
import icon3 from '../Image/Icon3.png'
import icon4 from '../Image/Icon4.png'
import icon5 from '../Image/Icon5.png'
import icon6 from '../Image/Icon6.png'
import arrw from "../Image/Vector.png"



const Home = () => {
  return (
    <>


      <Layout>

        {/* Banner part */}

        <div className="container-fluid">
          <div className="container-fluid" style={{ backgroundImage: `url(${imh1})`, width: "100%", height: "auto", padding: "0rem 2rem", paddingTop: "5rem", }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <h1 style={{ fontWeight: "700", color: "white", fontSize: "55px" }}>Are You a Supplier?</h1>

            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

              <p style={{ fontWeight: "300", color: "white", fontSize: "55px" }}>Explore Matching Opportunities.</p>
            </div>

            <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "3rem 2rem" }}>
              <div className="row">
                <div className="col sm" >
                  <form>
                    <div class="input-group" style={{ width: "400px", height: "56px" }}>
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1"><img src={mail} alt="" /></span>
                      </div>

                      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder='Search your required service here' style={{ height: "56px" }} />
                    </div>
                  </form>

                </div>
                <div className="col sm">
                  <div className="col sm" >
                    <form>
                      <div class="input-group" style={{ width: "400px", height: "56px" }}>
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1"><img src={loc} alt="" /></span>
                        </div>

                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                          placeholder='Search your desired location here' style={{ height: "56px" }} />
                      </div>
                    </form>

                  </div>

                </div>
                <div className="col sm">
                  <button style={{ width: "117.94px", height: "56px" }} type="submit" class="btn btn-success">Submit</button>


                </div>
              </div>
            </div>

            <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "3rem 2rem" }}>
              <div style={{ display: "flex" }}>
                <p style={{ fontWeight: "700", color: "white", fontSize: "18px", paddingRight: "5px" }}>Are you a buyer?</p><Link><p style={{ fontWeight: "200", color: "white", fontSize: "18px" }}> Click here if you are looking to post a requirements</p></Link>
              </div>
            </div>


          </div>
        </div>

        {/* Details Part */}

        <div className="container" style={{ padding: "6rem 0px" }}>
          <div className="row">
            <div className="col sm">
              <div>
                <p style={{ fontWeight: "700", color: "black", fontSize: "37.34px" }}>Ready to dive into HABOT?</p>
              </div>
              <div>
                <p>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
              </div>
              <div>
                <Link role='button' class="btn btn-success btn-lg" to="/login" style={{ height: "3.5rem", marginTop: "1rem" }}>Sign up Today ! <img src={arrw} alt="" style={{ marginLeft: "2rem" }} /></Link>
              </div>

            </div>
            <div className="col sm">
              <div className="container">
                <div className="row" style={{ marginTop: "1rem" }}>
                  <div className="col sm">
                    <button type="button" class="btn btn-outline-warning"
                      style={{ width: "240px", height: "65px", color: "black" }}>
                      Abu Dhabi</button>
                  </div>
                  <div className="col sm">
                    <button type="button" class="btn btn-outline-warning"
                      style={{ width: "240px", height: "65px", color: "black" }}>
                      Dubai</button>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "1rem" }}>
                  <div className="col sm">
                    <button type="button" class="btn btn-outline-warning"
                      style={{ width: "240px", height: "65px", color: "black" }}>
                      Sharjah & Ajman</button>
                  </div>
                  <div className="col sm">
                    <button type="button" class="btn btn-outline-warning"
                      style={{ width: "240px", height: "65px", color: "black" }}>
                      Fujairah</button>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "1rem" }}>
                  <div className="col sm">
                    <button type="button" class="btn btn-outline-warning"
                      style={{ width: "240px", height: "65px", color: "black" }}>
                      Ras Al Khaimah</button>
                  </div>
                  <div className="col sm">
                    <button type="button" class="btn btn-outline-warning"
                      style={{ width: "240px", height: "65px", color: "black" }}>
                      Umm Al Quwain</button>
                  </div>
                </div>
              </div>






            </div>
          </div>
        </div>

        {/* Buyer supplier part */}

        <div className="container" style={{ background: "#072F57" }}>
          <div className="container" style={{ padding: "5rem 3rem" }}>
            <div className="row">
              <div className="col sm" style={{ display: "flex", justifyContent: "center" }}>
                <div class="container mt-5">
                 
                  <div class="embed-responsive embed-responsive-16by9">
                  <iframe width="964" height="542" src="https://www.youtube.com/embed/i8tgRHXx4oQ" title="HABOT- How is works" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
              <div className="col sm">
                <div style={{ display: "flex" }}>
                  <div className="col sm">
                    <p className='custom-underline' style={{ fontWeight: "700", fontSize: "26px", color: "#EB7150" }}>Buyers</p>
                  </div>
                  <div className="col sm">
                    <p style={{ fontWeight: "700", fontSize: "26px", color: "white" }}>Suppliers</p>
                  </div>
                </div>
                <div className="col sm">
                  <p style={{ color: "white" }}><img src={tick} alt="" style={{ padding: "0px 7px" }} />Post your requirements.</p>
                  <p style={{ color: "white" }}><img src={tick} alt="" style={{ padding: "0px 7px" }} />Sit back for multiple suppliers to contact you.</p>
                  <p style={{ color: "white" }}><img src={tick} alt="" style={{ padding: "0px 7px" }} />Choose among the suppliers based on the ratings and reviews.</p>




                </div>




              </div>
            </div>
          </div>
        </div>

        {/* Get verfied Part */}


        <div className="container-fluid" style={{ backgroundColor: "#E8FBFF", marginTop: "8rem" }}>
          <div className="container" style={{ display: "flex", justifyContent: "center", padding: "5rem 0px" }}>
            <div className="row">
              <div className="col sm">
                <p className="custom-underline" style={{ fontWeight: 600, fontSize: "37.34px" }}>Let Suppliers Find You</p>

              </div>
              <div className="col sm" >
                <button style={{ width: "216px", height: "54px", backgroundColor: "#EB7150", }} type="button" class="btn btn-primary">Get Verified</button>


              </div>
            </div>

          </div>


        </div>

        {/* How it worked part */}

        <div className="container" style={{ marginTop: "6rem" }}>
          <div>
            <p style={{ fontWeight: 700, fontSize: "37.34px", display: "flex", justifyContent: "center" }}>How it works?</p>
          </div>

          <div style={{ fontWeight: 400, fontSize: "17.16px", display: "flex", justifyContent: "center", }}>
            Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.
          </div>
        </div>

        {/* Card Section */}

        <div className="container-fluid" style={{ marginTop: "6rem", marginBottom: "13rem", }}>
          <div className="row" >
            <div className="col">
              <div class="card" style={{ width: "400px", height: "254px", backgroundColor: "#E8FBFF", }}>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }} >
                  <img style={{ display: "flex", justifyContent: "center", height: "74.35px", width: "74.35px", }} src={icon1} class="card-img-top" alt="..." />
                </div>

                <div class="card-body">
                  <p class="card-text" style={{ display: "flex", justifyContent: "center", fontWeight: "500", fontSize: "20px" }}>Select Your Role and Sign Up</p>
                </div>
              </div>

            </div>
            <div className="col">
              <div class="card" style={{ width: "400px", height: "254px", }}>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }} >
                  <img style={{ display: "flex", justifyContent: "center", height: "74.35px", width: "74.35px", }} src={icon2} class="card-img-top" alt="..." />
                </div>

                <div class="card-body">
                  <p class="card-text" style={{ display: "flex", justifyContent: "center", fontWeight: "500", fontSize: "20px" }}>Buyers Post Your Requirements</p>
                </div>
              </div>

            </div>
            <div className="col">
              <div class="card" style={{ width: "400px", height: "254px", backgroundColor: "#E8FBFF", }}>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }} >
                  <img style={{ display: "flex", justifyContent: "center", height: "74.35px", width: "74.35px", }} src={icon3} class="card-img-top" alt="..." />
                </div>

                <div class="card-body">
                  <p class="card-text" style={{ display: "flex", justifyContent: "center", fontWeight: "500", fontSize: "20px" }}> Review, Select, and Contact the Best Suppliers</p>
                </div>
              </div>

            </div>
          </div>
          <div className="row" >
            <div className="col">
              <div class="card" style={{ width: "400px", height: "254px", }}>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }} >
                  <img style={{ display: "flex", justifyContent: "center", height: "74.35px", width: "74.35px", }} src={icon4} class="card-img-top" alt="..." />
                </div>

                <div class="card-body">
                  <p class="card-text" style={{ display: "flex", justifyContent: "center", fontWeight: "500", fontSize: "20px" }}>Select Your Role and Sign Up</p>
                </div>
              </div>

            </div>
            <div className="col">
              <div class="card" style={{ width: "400px", height: "254px", backgroundColor: "#E8FBFF" }}>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }} >
                  <img style={{ display: "flex", justifyContent: "center", height: "74.35px", width: "74.35px", }} src={icon5} class="card-img-top" alt="..." />
                </div>

                <div class="card-body">
                  <p class="card-text" style={{ display: "flex", justifyContent: "center", fontWeight: "500", fontSize: "20px" }}>Select Your Role and Sign Up</p>
                </div>
              </div>

            </div>
            <div className="col">
              <div class="card" style={{ width: "400px", height: "254px" }}>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }} >
                  <img style={{ display: "flex", justifyContent: "center", height: "74.35px", width: "74.35px", }} src={icon6} class="card-img-top" alt="..." />
                </div>

                <div class="card-body">
                  <p class="card-text" style={{ display: "flex", justifyContent: "center", fontWeight: "500", fontSize: "20px" }}> Review, Select, and Contact the Best Suppliers</p>
                </div>
              </div>

            </div>
          </div>
        </div>




      </Layout>



    </>
  )
}

export default Home