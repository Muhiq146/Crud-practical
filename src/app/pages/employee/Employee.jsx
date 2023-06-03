import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

// Components Imports
import { ProcessingLoader } from "../../../Helper/ProcessingLoader/Processing";
import Header from "../Header";
import Pagination from "../Pagination";
import Toolbar from "../Toolbar";
import EmployeeRow from "./EmployeeRow";
import TableHeader from "../../../shared-components/TableHeader/TableHeader";

const Employee = () => {
    // useEffect
    useEffect(() => {

    }, []);

    // Others
    const dispatch = useDispatch();

    // States
    const currentParam = useSelector((state) => state.EmployeeReducer.employeeParams);
    const [isLoading, setisLoading] = useState(false);
    const [employeeData, setemployeeData] = useState("");
    const [params, setparams] = useState(currentParam);

    // Get all buildings
    const getAllEmployees = async (search, limit, page) => {
        setisLoading(true);
        const response = {}
        // Fetch api
        let values = {
            search: search,
            limit: limit,
            page: page,
        };
        // console.log("response", response);
        if (response?.data.code) {
            setisLoading(false);
            setparams(values);
            setemployeeData(response.data.data);
        } else {
            toast.error((response?.data.message));
            setisLoading(false);
        }
    };

    return (
        <>
            <div className="card">
                {/* Header */}
                <Header title={"Employee"} />

                {/* Toolbar */}
                <Toolbar
                    params={params}
                    setparams={setparams}
                    action={getAllEmployees}
                    loading={isLoading}
                    addButton={"Add Employee"}
                    path="/employee/add-employee"
                />

                <div className="card-body py-4">
                    {/* Table */}
                    <div className="table-responsive">
                        <table className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer">
                            {/* Table heading */}
                            <TableHeader
                                data={[
                                    { name: "name", label: "Employee name", width: "200" },
                                    { name: "experience", label: "Experience", width: "125" },
                                    { name: "team", label: "Team", width: "125" },
                                    { name: "designation", label: "Designation", width: "125" },
                                ]}
                                params={params}
                                count={employeeData?.rows?.length}
                                action={getAllEmployees}
                            />

                            {/* Table body */}
                            <tbody className="text-gray-600 fw-bold">
                                {employeeData?.rows?.length > 0
                                    ? employeeData?.rows.map((employee) => {
                                        return (
                                            <EmployeeRow
                                                key={employee.id}
                                                count={employeeData?.rows?.length}
                                                employee={employee}
                                                getAllEmployees={getAllEmployees}
                                                params={params}
                                            />
                                        );
                                    })
                                    : !isLoading && (
                                        <tr>
                                            <td colSpan={5}>
                                                <div className="d-flex text-center w-100 align-content-center justify-content-center">
                                                    No employee found
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pages */}
                    <Pagination
                        action={getAllEmployees}
                        totalPages={Math.ceil(Number(employeeData?.count) / params.limit)}
                        params={params}
                        setparams={setparams}
                    />
                </div>
                {/* Loader */}
                {isLoading && <ProcessingLoader />}
            </div>
        </>
    );
};

export default Employee;
