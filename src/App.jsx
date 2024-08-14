import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HeaderComponent from "src/components/common/HeaderComponent";
import FooterComponent from "src/components/common/FooterComponent";
import ListEmployeeComponent from "src/components/ListEmployeeComponent";
import EmployeeComponent from "src/components/EmployeeComponent";
import ListDepartmentComponent from "src/components/ListDepartmentComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* // http://localhost:3000 */}
          <Route path="/" element={<ListEmployeeComponent />}></Route>
          {/* // http://localhost:3000/employees */}
          <Route path="/employees" element={<ListEmployeeComponent />}></Route>
          {/* // http://localhost:3000/add-employee */}
          <Route path="/add-employee" element={<EmployeeComponent />}></Route>
          {/* // http://localhost:3000/edit-employee/1 */}
          <Route path="/edit-employee/:id" element={<EmployeeComponent />}></Route>
          {/* // http://localhost:3000/departments */}
          <Route path='/departments' element = { <ListDepartmentComponent />}></Route>

        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
