import axios from "axios";

const REST_API_BASE_URL =  import.meta.env.VITE_APIURL
//'http://localhost:8080/api'

const REST_API_URL = `${REST_API_BASE_URL}/employees`
//'http://localhost:8080/api/employees';

//export const listEmployees = () => axios.get(REST_API_BASE_URL);
export const listEmployees = () => axios.get(`${REST_API_URL}/departments`);

export const createEmployee = (employee) => axios.post(REST_API_URL, employee);

export const getEmployee = (employeeId) => axios.get(REST_API_URL + '/' + employeeId);

export const updateEmployee = (employeeId, employee) => axios.put(REST_API_URL + '/' + employeeId, employee);

export const deleteEmployee = (employeeId) => axios.delete(REST_API_URL + '/' + employeeId);