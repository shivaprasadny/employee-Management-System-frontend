import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getAllEmployees();
    }, [])

    function getAllEmployees(){
        listEmployees()
            .then((response) => {
                setEmployees(response.data);
            })
            .catch(error => {
                console.error(error);
            })
    }

    function addNewEmployee() {
        navigate('/add-employee')
    }

    function updateEmployee(id){
        navigate(`/edit-employee/${id}`)
    }

    function removeEmployee(id){
        console.log(id);
        
        deleteEmployee(id).then((response) => {
getAllEmployees();
        }).catch(error =>{
            console.error(error);
        })

        const confirmDelete = window.confirm('Are you sure you want to delete this employee?');

    if(confirmDelete){
        deleteEmployee(id).then((response) => {
            getAllEmployees();
        }).catch(error => {
            console.error(error);
        })
    }

    }

    return (
        <div className='container mt-4'>
            <h2 className='text-center mb-3'>List of Employees</h2>

            <button className='btn btn-primary ' onClick={addNewEmployee}>
                Add Employee
            </button>

            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        employees.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                    <button className='btn btn-danger ms-2' onClick={() => removeEmployee(employee.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent