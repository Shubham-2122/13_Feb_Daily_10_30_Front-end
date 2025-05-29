import React, { useState } from 'react'

function Formhadlingobj() {

    const [form, setform] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
        address: ""
    })

    const getchange=(e)=>{
        setform({
            ...form,
            // name = value
            [e.target.name] : e.target.value
        })
        console.log(form)
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {/* <form action="
                            ">
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput2" className="form-label">Enter your name</label>
                                    <input type="text" value={form.name} onChange={(e)=>setform({...form,name:e.target.value})} className="form-control" id="exampleFormControlInput2" placeholder="Enter your name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" value={form.email} onChange={(e)=>setform({...form,email:e.target.value})} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput3" className="form-label">Enter your Mobile</label>
                                    <input type="text" value={form.mobile} onChange={(e)=>setform({...form,mobile:e.target.value})} className="form-control" id="exampleFormControlInput3" placeholder="Enter your number" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput4" className="form-label">Enter your Password</label>
                                    <input type="password" value={form.password} onChange={(e)=>setform({...form,password:e.target.value})} className="form-control" id="exampleFormControlInput4" placeholder="Enter your password" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                    <textarea className="form-control" value={form.address} onChange={(e)=>setform({...form,address:e.target.value})} id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                                </div>
                                <div className="mb-3">
                                    <input type="submit" />
                                </div>
                            </div>
                        </form> */}
                         <form action="
                            ">
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput2" className="form-label">Enter your name</label>
                                    <input type="text" name='name' value={form.name} onChange={getchange} className="form-control" id="exampleFormControlInput2" placeholder="Enter your name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" name='email' value={form.email} onChange={getchange} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput3" className="form-label">Enter your Mobile</label>
                                    <input type="text" name='mobile' value={form.mobile} onChange={getchange} className="form-control" id="exampleFormControlInput3" placeholder="Enter your number" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput4" className="form-label">Enter your Password</label>
                                    <input type="password" name='password' value={form.password} onChange={getchange} className="form-control" id="exampleFormControlInput4" placeholder="Enter your password" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                    <textarea name='address' className="form-control" value={form.address} onChange={getchange} id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
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

export default Formhadlingobj
