import { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from 'src/services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    const [available, setAvailable] = useState(false)    
    
    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, [])

    function getAllEmployees() {
        const REST_API_BASE_URL =  import.meta.env.VITE_APIURL
        console.log(`REST_API_BASE_URL = ${REST_API_BASE_URL}`)
        const mode = import.meta.env.VITE_MODE
        console.log(`Current Mode = ${mode}`)

        listEmployees()
        .then((response) => {
            const isDataAvailable = response.data && response.data.length;
            if(isDataAvailable){
                setAvailable(isDataAvailable)
                setEmployees(response.data);            
                console.log(employees);
            }else {
                console.log('Employees Empty')
            }
        }).catch(error => {
            console.error(error);
            console.log('Error', error.message);
        })
    }
    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id){
        console.log(id);

        deleteEmployee(id).then(() =>{
            getAllEmployees();
        }).catch(error => {
            console.error(error);
        })
    }

  return (
    <div className='container'>

        <h2 className='text-center'>List of Employees</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email Id</th>
                    <th>Department Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {   available?
                    employees.map(employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>{employee.departmentDto.departmentName}</td>
                            <td>
                                <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)}
                                    style={{marginLeft: '10px'}}
                                >Delete</button>
                            </td>
                        </tr>)
                    :(<tr><td>Employees Empty</td></tr>)    
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent