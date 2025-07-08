import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userread } from '../Slice/userSlice'

function Read() {

    const user = useSelector((state) => state.users.user)

    console.log(user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userread())
    }, [])

    return (
        <div>

            <div className="container">
                <h1>Hello this user Read data</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            user && user.map((data, index) => {
                                return (
                                    <tr>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
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

export default Read
