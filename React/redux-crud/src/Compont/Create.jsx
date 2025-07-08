import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useradd } from '../Slice/userSlice'
import { useNavigate } from 'react-router-dom'

function Create() {

    const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        name: "",
        email: "",
        password: ""
    })

    const getchange = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const dispatch = useDispatch()

    const getsubmit = (e) => {
        e.preventDefault();
        dispatch(useradd(form));
        redirect("/")

        setform({
            id: "",
            name: "",
            email: "",
            password: ""
        })
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h1>this Form user data add</h1>
                        <form action="" onSubmit={getsubmit}>
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">your name</label>
                                    <input type="text" name='name' onChange={getchange} value={form.name} className="form-control" id="name" placeholder="Your name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" name='email' onChange={getchange} value={form.email} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">your password</label>
                                    <input type="password" name='password' onChange={getchange} value={form.password} className="form-control" id="password" placeholder="Your password" />
                                </div>
                                <div className="mb-3">

                                    <input type='submit' />
                                </div>


                            </div>

                        </form>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Create
