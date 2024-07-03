import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { Login_API } from "../../API/Api"
import Layout from "../Common/Layout"
import { UseAuth } from "../../AuthContext/AuthManager"
import { ClipLoader } from "react-spinners"


const Login = () => {
  const SetValue = {
    email: "",
    password: ""
  }
  const [login, setLogin] = useState(SetValue)
  const [error, setError] = useState({})
  const[load, setLoad] = useState(false)
  const [auth,setAuth] = UseAuth()

  const Navigate = useNavigate()

  const Validation = () => {
    let error = {}

    if (!login.email) {
      error.email = "Email is Required!"
    }
    else if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(login.email)
    ) {
      error.email = "Enter a valid Email!"
    }
    if (!login.password) {
      error.password = "Enter a Valid Password!"
    }
    else if (login.password.length < 8) {
      error.password = "Enter a Valid Password!"
    }
    return error
  }

  const ChangeValue = (event) => {
    const { name, value } = event.target
    setLogin({ ...login, [name]: value })
    console.log(login)

    if(name === "email"){
      if(value.length === 0){
        setError({...error,email:"Email is Required!"})
        setLogin({...login,email:''})
      }
      else{
        setError({...error,email:''})
        setLogin({...login,email:value})
      }
    }

    if(name === "password"){
      if(value.length === 0){
        setError({...error,password:"Password is required"})
        setLogin({...login,password:""})
      }
      else{
        setError({...error,password:""})
        setLogin({...login,password:value})
      }
    }
  }

  const SubmitData = async(data) => {
    data.preventDefault()
    setError(Validation())

    const SubmitValue = Validation()

    if(Object.keys(SubmitValue).length === 0){
      setLoad(true) 
      try{ 
                 
        const Final = await Login_API(login)
        setLogin(Final)
        console.log("login",Final)
  
        if(Final.data.status === true){
          setAuth({...auth,
            user:Final.data.user,
            token:Final.data.token
          })
          Navigate("/")          
          localStorage.setItem("auth",JSON.stringify(Final.data))   
          toast.success(Final.data.message)   
        }
        else{
          toast.error("Something went wrong!")
        }
         
      }
      catch(error){
        console.log(error)
         toast.error("User not found!")
      }
      finally{
        setLoad(false)
      }
 
     }
  }
  return (
    <>
    <Layout>
    <div className="container" style={{marginTop:"3rem",marginBottom:"5rem"}}>
      <div className="row">
        <div className="col">
        <div class="card" style={{width: "25rem",backgroundColor:"#cffafe"}}>
  <div class="card-body">
    <h5 class="card-title" >Sign Up Here</h5>
    <form onSubmit={SubmitData}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    value={login.email} name="email" onChange={ChangeValue} placeholder="Enter a valid email" />
    <span style={{color:"red"}}>{error.email}</span>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter a valid password"
     value={login.password} name="password" onChange={ChangeValue}/>
    <span style={{color:"red"}}>{error.password}</span>
  </div>
  <button type="submit" class="btn btn-primary">{
                                                load ? (
                                                    <>
                                                        <ClipLoader color="#57dad6" />
                                                    </>
                                                ) : (
                                                    <>Sign Up</>
                                                )}</button> <Link to="/register">New user? Register here..</Link>
</form>
   
  </div>
</div>
       
        </div>

        <div className="col">
        <div class="card" style={{width: "25rem",backgroundColor:"#fae8ff"}}>
  <div class="card-body">
    <h5 class="card-title" style={{fontWeight:"700",fontSize:"27px"}}>Login to Access all the pages!</h5>

    <p style={{fontWeight:"400",fontSize:"22px"}} class="card-text">Login makes easier access to our latest products and update from the suppliers. Login to access
      all the latest updates without a miss.
    </p>
    
  </div>
</div>

        </div>
      </div>
      

      </div>
    </Layout>
   
    
    </>
   
  )
}

export default Login