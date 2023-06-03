import { ActionTypes } from "../../Constant/ActionType";

export const setEmployeeParams = (payload) => {
    return {
        type: ActionTypes.setEmployeeParams,
        payload: payload,
    };
};