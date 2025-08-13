import React, { useState } from 'react'
import { Modal,Table,Button } from 'react-bootstrap';
import { editEmp } from '../services/allApis';

function Ediit({ data }) {

    const [updata, setUpdata] = useState({
         name: data.name, gender: data.gender, salary: data.salary, email: data.email
    })

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        
    }
    const handleShow = () => setShow(true);

    
  const handleedit = async () => {
    if ( !updata.name || !updata.gender || !updata.salary || !updata.email ) {
      alert("Enter Valid Values")

    }
    else {

      console.log("Valid")
      const newData = new FormData()
      
      newData.append("name", updata.name)
      newData.append("gender", updata.gender)
      newData.append("salary", updata.salary)
      newData.append("email", updata.email)
      
      
        const res=await editEmp(newData,data._id)
        if(res.status==200){
         console.log(res.data)
          alert("employee Updated Successfully!!")
          handleClose()
        }
        else{
          alert(res.response.data)
        }
      }
     
    }

    // const handle=async()=>{
    //     const newData=new FormData()
    //     newData.append("name",)
    // }



    return (
        <>
         <button className='btn btn-outline-dark'><i className="fa-regular fa-pen-to-square  " onClick={handleShow}></i></button> 

            <Modal className='modal-lg'
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header >
                    <Modal.Title>Edit Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    <form action="" >
                        <Table >
                            <tbody>

                                {/* <tr>
                                    <th>Id:</th>
                                    <td><input type="number" defaultValue={data.id} required className='form-control' id='idd' onChange={(e) => { setUpdata({ ...updata, id: e.target.value }) }} /></td>

                                </tr> */}
                                <tr>
                                    <th>Name:</th>
                                    <td><input type="text" defaultValue={data.name} className='form-control' onChange={(e) => { setUpdata({ ...updata, name: e.target.value }) }} /></td>
                                </tr>
                                <tr>
                                    <th>Gender:</th>
                                    <td><select name="gender" defaultValue={data.gender} className='form-control' id="" onChange={(e) => { setUpdata({ ...updata, gender: e.target.value }) }}>
                                        <option value="select" disabled>select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select></td>
                                </tr>
                                <tr>
                                    <th>Salary:</th>
                                    <td><input type="number" defaultValue={data.salary} className='form-control' onChange={(e) => { setUpdata({ ...updata, salary: e.target.value }) }} /></td>
                                </tr>
                                <tr>
                                    <th>Email:</th>
                                    <td><input type="email" defaultValue={data.email} className='form-control' onChange={(e) => { setUpdata({ ...updata, email: e.target.value }) }} /></td>
                                </tr>
                               

                            </tbody>

                        </Table>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-dark" className='btn btn-lg' style={{ textAlign: 'center' }} onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="outline-dark" className='btn btn-lg' style={{ textAlign: 'center' }} onClick={handleedit} >Update</Button>

                </Modal.Footer>
            </Modal>
            {/* <ToastContainer/>   */}
        </>
    )
}

export default Ediit