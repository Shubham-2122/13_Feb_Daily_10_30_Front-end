import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateuser } from '../Slice/userSlice'

function Editprofile() {

    const redirect = useNavigate()

    const {id} = useParams()
    console.log(id)
     const disptach =useDispatch()

     const [userdata,setuserdata] = useState([])

    const {user,loading} = useSelector((state)=>state.users)
    console.log(user)

    

    useEffect(()=>{

        const singleuser = user.filter((data)=> data.id === id)
        console.log(singleuser[0])
        setuserdata(singleuser[0])
    },[])

    const getchage=(e)=>{
        setuserdata({
            ...userdata,
            [e.target.name]:e.target.value
        })
    }

    const getsubmitd=(e)=>{
        e.preventDefault();
        disptach(updateuser(userdata))
        redirect("/")

        
    }

  return (
    <div>
         <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h1>this Form user data Update</h1>
                        <form action="" >
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">your name</label>
                                    <input type="text" name='name' value={userdata && userdata.name} onChange={getchage}  className="form-control" id="name" placeholder="Your name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" name='email' value={userdata && userdata.email}  onChange={getchage} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">your password</label>
                                    <input type="password" name='password' onChange={getchage} value={userdata && userdata.password}  className="form-control" id="password" placeholder="Your password" />
                                </div>
                                <div className="mb-3">

                                    <input type='submit' onClick={getsubmitd} />
                                </div>


                            </div>

                        </form>
                    </div>
                </div>


            </div>
    </div>
  )
}

export default Editprofile
