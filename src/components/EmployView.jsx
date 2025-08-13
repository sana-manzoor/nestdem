import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { usersList } from '../services/allApis'
import { Link } from 'react-router-dom'
import Ediit from './Ediit'
import { deleteEmp } from '../services/allApis'

function EmployView() {

    const [users, setUsers] = useState([])

    const [data, setData] = useState({
        id: users.id, name: users.name, gender: users.gender, salary: users.salary, email: users.email
    })



    const getuserslist = async () => {

        const result = await usersList()
        console.log(result)
        if (result.status === 200) {
            console.log(result.data)
            setUsers(result.data)

        }
        else {
            setUsers([])
        }
    }

    useEffect(() => {

        getuserslist()

    }, [])


    const handledelete = async (id) => {

        const result = await deleteEmp(id)
        if (result.status === 200) {
            alert("Item deletion successfull!!")
            getuserslist()
        }
        else {
            alert("Item deletion failed!!")
        }
    }

    // console.log(users)

    return (
        <>
            <div className='display-6 text-center mt-3'><u>Employee Details</u></div>
            <div className=' p-5'>
                <div className='mt-5'>
                    <Table bordered striped hover >
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>gender</th>
                                <th>salary</th>
                                <th>email</th>
                                <th></th>

                            </tr>

                        </thead>
                        <tbody>
                            {
                                users.map(item => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.salary}</td>
                                        <td>{item.email}</td>
                                        <td >
                                            <button className='btn btn-outline-dark me-3' onClick={() => { handledelete(item._id) }}>
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                            <Ediit data={item}/> 
                                    </td>
                                    </tr>
                        ))
                            }

                    </tbody>

                </Table>
            </div>

        </div >


            
        </>
    )
}

export default EmployView