import React, { useEffect, useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

    const redirect = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("Uid")){
            redirect("/")
        }
    },[])

    const [form,setform] = useState({
        email:"",
        password:""
    })

     const getchnage=(e)=>{
        setform({
            ...form,
            [e.target.name]:e.target.value
        })
        console.log(form)
    }

    const getsubmit=async(e)=>{
        e.preventDefault()

        try {
            
            const {email,password} = form

            // if(email == "" || password == ""){
            //     console.log("Pls required this field..!")
            //     toast.error("Pls required this field..!")
            //     return false
            // }

            // empty data
            if(!email.trim() || !password.trim()){
                console.log("Pls required this field..!")
                toast.error("Pls required this field..!")
                return false
            }

            const res = await axios.get(`http://localhost:3000/users?email=${email}`)
            console.log(res.data)

            // email not match
            if(res.data.length == 0){
                console.log("Email does not match..!")
                toast.error("Email does not match..!")
                return false
            }

            // password match
            let user = res.data[0]
            console.log(user)

            // password does match
            if(user.password !==password){
                console.log("password does not match..")
                toast.error("password does not match..")
                return false
            }

            // status match
            if(user.status == "block"){
                console.log("Account has been block..")
                toast.error("Account has been block..")
                return false
            }

            localStorage.setItem("Uid",user.id)
            localStorage.setItem("Uname",user.name)
            redirect("/")
            toast.success("Succesfully login..!")
            console.log("Successfully login..")

        } catch (error) {
            console.log("api data not Found",error)
            toast.error("api data not found.")
        }
    }

    return (
        <div>
            <MDBContainer fluid>

                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                        <form action="">
                            <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                                <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                                    <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                                    <p className="text-white-50 mb-3">Please enter your login and password!</p>

                                    <MDBInput value={form.email} onChange={getchnage} name='email' wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg" />
                                    <MDBInput value={form.password} onChange={getchnage} name='password' wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg" />

                                    <h5>create <Link to="/newdata">new Account</Link></h5>

                                    <MDBBtn size='lg' onClick={getsubmit}>
                                        Login
                                    </MDBBtn>



                                </MDBCardBody>
                            </MDBCard>
                        </form>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </div>
    )
}

export default Login
