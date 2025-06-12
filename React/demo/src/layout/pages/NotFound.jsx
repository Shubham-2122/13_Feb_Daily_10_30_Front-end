import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NotFound() {

    const redirect = useNavigate()

    const backhome=()=>{
        redirect("/")
    }

    return (
        <div>
            <div className="container">
                <h1 className='bg-danger text-light p-4'>404 NOT FOUND PAGE</h1>
                {/* <Link to="/" className='btn btn-primary p-3'>Back to Home</Link> */}
                <button onClick={backhome} className='btn btn-primary'>Back to Home</button>
            </div>
        </div>
    )
}

export default NotFound
