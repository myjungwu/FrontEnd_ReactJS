import axios from "axios";

const REST_API_BASE_URL =  import.meta.env.VITE_APIURL
//'http://localhost:8080/api'

const DEPARTMENT_REST_API_URL = `${REST_API_BASE_URL}/departments`
//'http://localhost:8080/api/departments'

export const getAllDepartments = () => axios.get(DEPARTMENT_REST_API_URL);

export const createDepartment = (department) => axios.post(DEPARTMENT_REST_API_URL, department);

export const getDepartmentById = (departmentId) => axios.get(DEPARTMENT_REST_API_URL + '/' + departmentId);

export const updateDepartment = (departmentId, department) => axios.patch(DEPARTMENT_REST_API_URL + '/' + departmentId, department);

export const deleteDepartment = (departmentId) => axios.delete(DEPARTMENT_REST_API_URL + '/' + departmentId);