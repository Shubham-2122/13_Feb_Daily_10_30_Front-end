import React, { useState } from 'react'

function Formhadling() {

    const [name,setname] = useState("")
    const [email,setemail]  = useState("")
    const [password,setpassword] = useState("")
    const [mobile,setmobile] = useState("")
    const [address,setaddress] = useState("")

    const getname =(e)=>{
        setname(e.target.value)
    }

    return (
        <div>
            <h1>hello this form hadling</h1>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <form action="
              ">
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput2" className="form-label">Enter your name</label>
                                    {/* <input type="text" value={name} onChange={(e)=>setname(e.target.value)} className="form-control" id="exampleFormControlInput2" placeholder="Enter your name" /> */}
                                    <input type="text" value={name} onChange={getname} className="form-control" id="exampleFormControlInput2" placeholder="Enter your name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput3" className="form-label">Enter your Mobile</label>
                                    <input type="text" value={mobile} onChange={(e)=>setmobile(e.target.value)} className="form-control" id="exampleFormControlInput3" placeholder="Enter your number" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput4" className="form-label">Enter your Password</label>
                                    <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} className="form-control" id="exampleFormControlInput4" placeholder="Enter your password" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                    <textarea className="form-control" value={address} onChange={(e)=>setaddress(e.target.value)} id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                                </div>
                                <div className="mb-3">
                                    <input type="submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Formhadling
