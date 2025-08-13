import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { registerApi } from '../services/allApis'
import { Link } from 'react-router-dom'

function Register() {

    const [data, setData] = useState({
        id: "", name: "", gender: "", salary: "", email: ""
    })


   
    const register = async (e) => {
        e.preventDefault()

        if (!data.id || !data.name || !data.gender || !data.salary || !data.email) {
            alert("enter valid data")
        }
        else {
            const res = await registerApi(data)
            console.log(res.data)
            if (res.status >= 200 && res.status < 300){
                alert(`Registration of ${res.data.name} is Successfull!!`)
                setData({ id: " ", name: "", gender: " ", salary: " ", email: " " })
                //   navigate('/login')
            }
            else {
                alert(res.response)
            }
            // console.log(res.response.data)
        }
        console.log(data)

    }
    return (
        <>
            <h1 className='display-5 text-center'>Employee Registration updated form </h1>
            <div>
                <form action="" >
                    <Table >
                        <tbody>

                            <tr>
                                <th>Id:</th>
                                <td><input type="number" required className='form-control' id='idd' onChange={(e) => { setData({ ...data, id: e.target.value }) }} /></td>
                           

                            </tr>
                            <tr>
                                <th>Name:</th>
                                <td><input type="text" className='form-control' onChange={(e) => { setData({ ...data, name: e.target.value }) }} /></td>
                            </tr>
                            <tr>
                                <th>Gender:</th>
                                <td><select name="gender" className='form-control' id="" onChange={(e) => { setData({ ...data, gender: e.target.value }) }}>
                                    <option value="" selected disabled>select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select></td>
                            </tr>
                            <tr>
                                <th>Salary:</th>
                                <td><input type="number" className='form-control' onChange={(e) => { setData({ ...data, salary: e.target.value }) }} /></td>
                            </tr>
                            <tr>
                                <th>Email:</th>
                                <td><input type="email" className='form-control' onChange={(e) => { setData({ ...data, email: e.target.value }) }} /></td>
                            </tr>
                            <tr>
                                <td colSpan={2}><button className='btn btn-outline-dark' type='submit' onClick={register}>Submit</button><span><Link to={'/view'}>View Employees</Link></span></td>
                            </tr>

                        </tbody>

                    </Table>
                </form>
            </div>

        </>
    )
}

export default Register
