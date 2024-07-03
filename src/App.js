import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import FindSuppliers from './Pages/Components/FindSuppliers'
import Details from './Pages/Components/Details'
import SearchProducts from './Pages/Components/SearchProducts'
import Login from './Pages/Auth/Login'
import { ToastContainer } from 'react-toastify'
import Register from './Pages/Auth/Register'
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'

const App = () => {
  const PrivateAuth = ({children})=>{
    const token = localStorage.getItem("auth") || sessionStorage.getItem("auth")
    return token !== null && token !== undefined?(
      children
    ):(
      <Navigate to='/login'/>
    )
  }
  const PrivateRoute = [
    {
    ele:<FindSuppliers/>,
    path:"/findsuppliers"
  },
    {
    ele:<Details/>,
    path:"/details/:id"
  },
    {
    ele:<SearchProducts/>,
    path:"/search"
  },
  ]

  const PublicRoute =[

   {
     ele:<Home/>,
     path:"/"
  },
   {
     ele:<Login/>,
     path:"/login"
  },
   {
     ele:<Register/>,
     path:"/register"
  },

]

  return (
    <>
    <ToastContainer/>
    <Router>
      <Routes>
        {
          PublicRoute.map((item)=>{
            return(
              <>
              <Route 
              path={item.path}
              element={item.ele}/>
              
              </>
            )
          })
        }

        {
          PrivateRoute.map((item)=>{
            return(
              <>
              <Route
              path={item.path}
              element={<PrivateAuth>{item.ele}</PrivateAuth>}/>
              
              </>
            )
          })
        }
        
      </Routes>
    </Router>
    
    
    </>
  )
}

export default App