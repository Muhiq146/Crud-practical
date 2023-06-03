import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// Components Imports
import { DeleteSvg, EditSvg, EyeopenSvg } from "../../../Helper/SvgComponents";
import DeleteWarning from "../../../shared-components/DeleteWarning/DeleteWarning";

const EmployeeRow = ({
    count,
    employee,
    getAllEmployees,
    params,
}) => {
    // Others
    const navigate = useNavigate();

    const [deleteId, setdeleteId] = useState("");

    // Delete employee
    const deleteEmployee = async (id) => {
        if (!id) {
            return false;
        }
        // const response = await Api(`employee/${id}`, "DELETE", auth.token);
        const response = {};
        // console.log(response);
        if (response?.data.code) {
            toast.success((response?.data.message));
        } else {
            toast.error((response?.data.message));
        }
        setdeleteId("");
        getAllEmployees(
            params.search,
            params.limit,
            count <= 1 && params.page > 1 && response?.data.code ? params.page - 1 : params.page,
            params.sortBy,
            params.sort
        );
    };

    return (
        <>
            <DeleteWarning
                name={("Enployee")}
                show={deleteId}
                onHide={setdeleteId}
                onConfirm={deleteEmployee}
            />

            <tr>
                <td>{employee?.name}</td>
                <td className="text-end">
                    {/* Actions */}
                    <div className="d-flex justify-content-end flex-shrink-0">
                        {/* View */}
                        <button
                            className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            onClick={() => {
                                navigate("/configuration/hotel/employee/view_employee", {
                                    state: { id: employee?.id },
                                });
                            }}
                        >
                            <span className="svg-icon svg-icon-3">
                                <EyeopenSvg />
                            </span>
                        </button>
                        {/* Edit */}
                        <button
                            className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            onClick={() => {
                                navigate("/configuration/hotel/employee/edit_employee", {
                                    state: { id: employee?.id },
                                });
                            }}
                        >
                            <span className="svg-icon svg-icon-3">
                                <EditSvg />
                            </span>
                        </button>
                        {/* Delete */}
                        <button
                            className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                            onClick={() => setdeleteId(employee.id)}
                        >
                            <span className="svg-icon svg-icon-3">
                                <DeleteSvg />
                            </span>
                        </button>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default EmployeeRow;
