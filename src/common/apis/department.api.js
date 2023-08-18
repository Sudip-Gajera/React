import { deleteRequest, getRequest, postRequest, putRequest } from "../request"

export const getdepartmentData = () => {
    return getRequest('department')
}

export const postdepartmentData = (data) => {
    return postRequest('department', data)
}

export const deletedepartmentData = (id) => {
    return deleteRequest('department/' + id)
}

export const updatedepartmentData = (data) => {
    return putRequest('department/' + data.id, data)
}