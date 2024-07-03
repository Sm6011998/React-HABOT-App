import React from 'react'
import logo from '../../Image/Logo.png'
import "./Main.css"
import { Link, useNavigate } from 'react-router-dom'
import { UseAuth } from '../../AuthContext/AuthManager'
import { toast } from 'react-toastify'

const Navbar = () => {
  const[auth,setAuth] = UseAuth()
  const Navigate = useNavigate()

  const LogOut = ()=>{
    setAuth({...auth,user:null,token:""})
    localStorage.removeItem('auth')
    toast.warning("Succsessfully Logout!")
    Navigate("/")

  }
  return (
    <>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand"><img src={logo} alt="" /></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse nav justify-content-end" id="navbarNavAltMarkup">

    <div class="navbar-nav" style={{padding:"1rem 0px"}}>
    <li class="nav-item active">
        <Link class="nav-link" to="/" style={{marginRight:"2rem"}}>Home <span class="sr-only">(current)</span></Link>
      </li>
      <Link class="nav-link active" to="/findsuppliers" style={{marginRight:"2rem"}}>Find Suppliers</Link>
      <div class="dropdown" >
  <button class="btn  dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false" style={{marginRight:"2rem"}}>
    Find Service Tags
  </button>
  <div class="dropdown-menu">
    <Link class="dropdown-item" to="/search">Search Products</Link>
  
  </div>
</div>
      {
        !auth.user?(
          <>
          <Link to='/login' class="btn btn-outline-success" style={{marginRight:"1rem"}}>Sign Up</Link>
          <Link to='/register' class="btn btn-outline-success" style={{marginRight:"1rem"}}>Register</Link>
          </>
        ):(
          <>
          <button type="button" class="btn btn-primary btn-lg" style={{marginRight:"1rem"}}>{auth.user.name}</button>
          <button type="button" onClick={LogOut} class="btn btn-outline-warning" style={{marginRight:"1rem"}}>Log Out</button>
          </>

        )
      }
    </div>
  </div>
</nav>
    
    </>
  )
}

export default Navbar