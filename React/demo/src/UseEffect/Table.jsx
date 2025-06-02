import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Table() {

    const [data,setdata] = useState([])

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata=async()=>{
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(res.data)
        setdata(res.data)
    }

  return (
    <div>
       <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Compnay</th>
                    </tr>
                </thead>
                <tbody>
                   {
                     data && data.map((user,index)=>{
                        return(
                            <tr key={index}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.city}</td>
                                    <td>{user.company.name}</td>
                                </tr>
                        )
                     })
                   }
                </tbody>
            </table>
    </div>
  )
}

export default Table
