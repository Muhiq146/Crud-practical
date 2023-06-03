import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Components Imports
import { App } from "../App";
import Employee from "../app/pages/employee/Employee";
import EmployeeForm from "../app/pages/employee/EmployeeForm";

// const { PUBLIC_URL } = process.env;

const AppRoutes = () => {

  return (
    <HashRouter>
      <Routes>
        <Route element={<App />}>
          <Route index path="employee" element={<Employee />} />
          <Route path="employee/add-employee" element={<EmployeeForm />} />
          <Route path="employee/edit-employee" element={<EmployeeForm />} />
          <Route path="*" element={<Navigate to="employee" />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
export { AppRoutes };
