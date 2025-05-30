import React, { useEffect, useState } from 'react'

function UseTable() {

    const [data, setdata] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const result = await res.json();
        // console.log(result)
        setdata(result)
    }

    return (
        <div className='container'>
            <h1>hello this Table call</h1>
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
                        data && data.map((user, index) => {
                            console.log(user)
                            // console.log(index)
                            return (
                                <tr>
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

export default UseTable
