import React, { useEffect, useState } from 'react'
import AHeader from '../Acoman/AHeader'
import ANavs from '../Acoman/ANavs'
import axios from 'axios'

function TriningManage() {

    const [train,settrain] = useState([])

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata=async()=>{
        const res = await axios.get("http://localhost:3000/training")
        console.log(res.data)
        settrain(res.data)
    }

  return (
    <div>
        <AHeader  />
        <ANavs title="Trining Manage" name="Trining" />
       <div className="container py-5">
                <h1 className='text-center'>Hello this Trining Manage</h1>
                <table className="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Image</th>
                            <th scope="col">desc</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            train && train.map((data,index) => {
                                console.log(data)
                                return (
                                    <tr className='text-center' key={index}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.title}</td>
                                        <td>
                                            <img src={data.img} style={{width:"70px",height:"70px"}} alt="" />
                                        </td>
                                        <td>{data.desc}</td>
                                        <td>
                                            <button className='btn btn-info'>View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

            </div>
    </div>
  )
}

export default TriningManage
