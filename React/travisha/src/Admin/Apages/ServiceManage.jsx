import React, { useEffect, useState } from 'react'
import AHeader from '../Acoman/AHeader'
import ANavs from '../Acoman/ANavs'
import axios from 'axios'

function ServiceManage() {

    const [service, setservice] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    // all product
    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/services")
        // console.log(res.data)
        setservice(res.data)
    }

    const [singlepro, setsinglepro] = useState({
        id: "",
        title: "",
        img: "",
        desc: ""
    })

    const product = async (id) => {
        const res = await axios.get(`http://localhost:3000/services/${id}`)
        console.log(res.data)
        setsinglepro(res.data)
    }


    return (
        <div>
            <AHeader />
            <ANavs title="Service Manage" name="Service" />
            <div className="container">
                <h1 className='text-center'>Hello this Service Manage</h1>
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
                            service && service.map((data, index) => {
                                // console.log(data)
                                return (
                                    <tr className='text-center' key={index}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.title}</td>
                                        <td>
                                            <img src={data.img} style={{ width: "70px", height: "70px" }} alt="" />
                                        </td>
                                        <td>{data.desc}</td>
                                        <td>
                                            <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => product(data.id)} >View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>



                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="card" style={{ width: "100%" }}>
                                    <img src={singlepro.img} style={{height:"250px"}} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{singlepro.id}</h5>
                                        <h5 className="card-title">{singlepro.title}</h5>
                                        <p className="card-text">{singlepro.desc}</p>
                                    </div>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>





            </div>

        </div>
    )
}

export default ServiceManage
