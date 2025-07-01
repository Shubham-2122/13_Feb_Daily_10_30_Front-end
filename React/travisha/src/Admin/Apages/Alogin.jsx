import React, { useEffect, useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Alogin() {

    const redirect = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("Aid")){
            redirect("/dash")
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

            const res = await axios.get(`http://localhost:3000/admin?email=${email}`)
            console.log(res.data)

            // email not match
            if(res.data.length == 0){
                console.log("Email does not match..!")
                toast.error("Email does not match..!")
                return false
            }

            // password match
            let admin = res.data[0]
            console.log(admin)

            // password does match
            if(admin.password !==password){
                console.log("password does not match..")
                toast.error("password does not match..")
                return false
            }

            localStorage.setItem("Aid",admin.id)
            localStorage.setItem("Aname",admin.name)
            redirect("/dash")
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

                        <form action="" onSubmit={getsubmit}>
                            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                    <h2 className="fw-bold mb-2 text-uppercase text-light">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                    <MDBInput value={form.email} onChange={getchnage} name='email' wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" />
                                    <MDBInput value={form.password} onChange={getchnage} name='password' wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" />

                                    <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                                    <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
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

export default Alogin
