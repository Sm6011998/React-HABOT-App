import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Register_API } from '../../API/Api';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import Layout from '../Common/Layout';

const Register = () => {
    const SetValue = {
        name: '',
        email: '',
        mobile: '',
        password: '',
        first_school: '',
        image: null
    }

    const [formData, setFormData] = useState(SetValue);
    const [image, setImage] = useState()
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState({})
    const Navigate = useNavigate()

    const Validation = () => {
        let error = {}

        if (!formData.name) {
            error.name = "Name is Required!"
        }
        if (!formData.email) {
            error.email = "Email is Required!"
        }
        else if (
            !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(formData.email)
        ) {
            error.email = "Enter a valid Email!"
        }
        if (!formData.mobile) {
            error.mobile = "Number is Required!"
        }
        else if (formData.mobile.length < 10) {
            error.mobile = "Number should be 10 digit!"
        }
        if (!formData.password) {
            error.password = "Enter a Valid Password!"
        }
        else if (formData.password.length < 6) {
            error.password = "Enter a Valid Password!"
        }
        if (!formData.first_school) {
            error.first_school = "Value is required!"
        }

        return error
    }

    const ChangeValue = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
        console.log(formData)

        if (name === "email") {
            if (value.length === 0) {
                setError({ ...error, email: "Email is Required!" })
                setFormData({ ...formData, email: '' })
            }
            else {
                setError({ ...error, email: '' })
                setFormData({ ...formData, email: value })
            }
        }

        if (name === "name") {
            if (value.length === 0) {
                setError({ ...error, name: "Name is Required!" })
                setFormData({ ...formData, name: '' })
            }
            else {
                setError({ ...error, name: '' })
                setFormData({ ...formData, name: value })
            }
        }

        if (name === "mobile") {
            if (value.length === 0) {
                setError({ ...error, mobile: "Number is Required!" })
                setFormData({ ...formData, mobile: '' })
            }
            else {
                setError({ ...error, mobile: '' })
                setFormData({ ...formData, mobile: value })
            }
        }

        if (name === "password") {
            if (value.length === 0) {
                setError({ ...error, password: "Password is required!" })
                setFormData({ ...formData, password: "" })
            }
            else {
                setError({ ...error, password: "" })
                setFormData({ ...formData, password: value })
            }
        }

        if (name === "first_school") {
            if (value.length === 0) {
                setError({ ...error, first_school: "Value is required!" })
                setFormData({ ...formData, first_school: "" })
            }
            else {
                setError({ ...error, first_school: "" })
                setFormData({ ...formData, first_school: value })
            }
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(Validation())

        let SubmitValue = Validation()


        const SubmitData = new FormData();
        SubmitData.append("name", formData.name)
        SubmitData.append("email", formData.email)
        SubmitData.append("mobile", formData.mobile)
        SubmitData.append("password", formData.password)
        SubmitData.append("first_school", formData.first_school)
        SubmitData.append("image", image)

        if (Object.keys(SubmitValue).length === 0) {
            setLoader(true)
            const Response = await Register_API(SubmitData)
            console.log("register", Response)

            if (Response.data.status === true) {
                Navigate('/login')
                toast.success(Response.data.messege)
            }
            setLoader(false)

        }
    }
    return (
        <>
            <Layout>
                <div className="container" style={{ marginTop: "3rem", marginBottom: "5rem" }}>
                    <div className="row" >
                        <div class="card" style={{ width: "37rem", backgroundColor: "#cffafe" }}>
                            <div class="card-body">
                                <h5 class="card-title">Register here</h5>
                                <div className="col">
                                    <form onSubmit={handleSubmit}>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col">
                                                    <div class="form-group">
                                                        <label for="exampleInputEmail1">Name</label>
                                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                            value={formData.name} name="name" onChange={ChangeValue} placeholder="Enter your name" />
                                                        <span style={{ color: "red" }}>{error.name}</span>
                                                    </div>


                                                </div>
                                                <div className="col">
                                                    <div class="form-group">
                                                        <label for="exampleInputEmail1">Email</label>
                                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                            value={formData.email} name="email" onChange={ChangeValue} placeholder="Enter a valid email" />
                                                        <span style={{ color: "red" }}>{error.email}</span>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                <div class="form-group">
                                            <label for="exampleInputEmail1">Mobile</label>
                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                value={formData.mobile} name="mobile" onChange={ChangeValue} placeholder="Enter a valid number" />
                                            <span style={{ color: "red" }}>{error.mobile}</span>
                                        </div>

                                                    
                                                </div>
                                                <div className="col">
                                                <div class="form-group">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter a valid password"
                                                name='password' value={formData.password} onChange={ChangeValue} />
                                            <span style={{ color: "red" }}>{error.password}</span>
                                        </div>

                                                </div>
                                            </div>

                                        </div>




                                      
                                     

                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Enter your School Name</label>
                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                value={formData.first_school} name="first_school" onChange={ChangeValue} placeholder="Enter school name" />
                                            <span style={{ color: "red" }}>{error.first_school}</span>
                                        </div>

                                        <div class="form-group">
                                            <label for="exampleFormControlFile1">Upload images</label>
                                            <input type="file" class="form-control" id="exampleFormControlFile1" onChange={(event) => {
                                                setImage(event.target.files[0])
                                            }} name='image' accept="image/*" />

                                            {image !== "" && image !== undefined && image !== null ? (
                                                <img
                                                    style={{ height: "180px" }}
                                                    src={URL.createObjectURL(image)}
                                                    alt=""
                                                    className="upload-img"
                                                />
                                            ) : (
                                                <>{image === "" && <p>Drag or drop content here</p>}</>
                                            )
                                            }
                                        </div>



                                        <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
                                            <button type="submit" class="btn btn-primary">{
                                                loader ? (
                                                    <>
                                                        <ClipLoader color="#57dad6" />
                                                    </>
                                                ) : (
                                                    <>Register</>
                                                )}</button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>

                        <div className="col">
                            <div class="card" style={{ width: "25rem", backgroundColor: "#fae8ff" }}>
                                <div class="card-body">
                                    <h5 class="card-title" style={{ fontWeight: "700", fontSize: "27px" }}>Register to Access all the pages!</h5>

                                    <p style={{ fontWeight: "400", fontSize: "22px" }} class="card-text">Register makes easier access to our latest products and update from the suppliers. Register to access
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

export default Register