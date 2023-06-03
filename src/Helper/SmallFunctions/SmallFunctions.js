import moment from 'moment';

// Components imports
import store from '../../Redux/Store/Store';

// Get date & time in defined format
const getFormattedDateTime = (value, id) => {
    const data = store.getState().FormDataReducer.GeneralSettings
    let index = data?.findIndex((obj) => obj?.hotel_id == id)
    if (!value) {
        return ""
    } else if (data[index]?.date_format && data[index]?.time_format)
        return moment(value).format(`${data[index]?.date_format} ${data[index]?.time_format}`)
    else {
        return moment(value).format("YYYY-MM-DD HH:MM")
    }
}

const getFormattedDate = (value, id) => {
    const data = store.getState().FormDataReducer.GeneralSettings
    let index = data?.findIndex((obj) => obj?.hotel_id == id)
    if (data[index]?.date_format)
        return moment(value).format(`${data[index]?.date_format}`)
    else {
        return moment(value).format("YYYY-MM-DD")
    }
}

// Required validation
const requiredValidation = (key) => {
    return `${(key)} ${("is required")}`
}



export { getFormattedDateTime, getFormattedDate, requiredValidation }