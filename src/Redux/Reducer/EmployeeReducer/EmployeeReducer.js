import { ActionTypes } from "../../Constant/ActionType";

const initialState = {
    employeeParams: {
        search: "",
        limit: "",
        page: "",
    }
};

const EmployeeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.setEmployeeParams:
            return {
                ...state,
                employeeParams: payload,
            };
        default:
            return state;
    }
};
export default EmployeeReducer;