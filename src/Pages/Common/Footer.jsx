import React from 'react'
import img1 from "../../Image/Logo2.png"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <div className="container-fluid"  style={{background:"#123557", padding:"3rem 3rem",}}>
        <div style={{borderTop:"1px solid white", borderBottom:"1px solid white"}}>
        <div className="row " style={{padding:"1.5rem 1.5rem"}} >
        
        <div className="col sm" style={{marginTop:"2.5rem"}}>
            <img src={img1} alt="" />
            <p style={{color:"white",marginTop:"1rem"}}>© R Soubhik Mukherjee</p>
        </div>
        <div className="col sm " >
            <h6  style={{color:"white",fontWeight:700}}>Company</h6>
            <p style={{color:"white"}}>About</p>
            <p style={{color:"white"}}>FAQ</p>


        </div>
        <div className="col sm">
        <h6 style={{color:"white",fontWeight:700}}>Terms</h6>
            <p style={{color:"white"}}>Data Privacy</p>
            <p style={{color:"white"}}>Terms</p>
            <p style={{color:"white"}}> Accessibility</p>

        </div>
        <div className="col sm">
        <h6 style={{color:"white", fontWeight:700}}>Related</h6>
            <p style={{color:"white"}}>Find Buyer</p>
            <p style={{color:"white"}}>Feedback</p>

        </div>
        <div className="col sm" style={{marginTop:"3.5rem"}}>
            <Link to='https://www.linkedin.com/in/soubhik-mukherjee-5a93b8184/' target='_blank'><i style={{color:"white", fontWeight:700,width:"40px",height:"40px",marginRight:"0.5rem", fontSize:"25px"}}class="fa-brands fa-linkedin-in"></i></Link>

        <Link to='https://x.com/twitt_login?lang=en' target='_blank'><i style={{color:"white", fontWeight:700,width:"40px",height:"40px",marginRight:"0.5rem", fontSize:"25px"}} class="fa-brands fa-square-twitter"></i></Link>
         <Link to='https://www.facebook.com/login/' target='_blank'><i style={{color:"white", fontWeight:700,width:"40px",height:"40px",marginRight:"0.5rem", fontSize:"25px"}} class="fa-brands fa-facebook"></i></Link>
        <Link to='https://www.instagram.com/accounts/login/?hl=en' target='_blank'><i  style={{color:"white", fontWeight:700,width:"40px",height:"40px",marginRight:"0.5rem", fontSize:"25px"}} class="fa-brands fa-instagram"></i></Link>
            

        </div>


    </div>

        </div>
       
       
        </div>
   
    
    </>
  )
}

export default Footer