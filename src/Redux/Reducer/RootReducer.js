import { combineReducers } from "redux";
//Storage
import storage from "redux-persist/lib/storage";
//Actions
import { ActionTypes } from "../Constant/ActionType";

//All Reducer
import EmployeeReducer from "./EmployeeReducer/EmployeeReducer";


//Combine All Reducers
const AppReducer = combineReducers({
    EmployeeReducer
});

const RootReducer = (state, { type, payload }) => {
    return AppReducer(state, { type, payload });
};
export default RootReducer;
