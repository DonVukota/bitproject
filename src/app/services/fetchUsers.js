import {header} from "../../shared/headerData.js"

export const fetchUsers = () => {
    return fetch("http://bitbookapi.azurewebsites.net/api/users/", {
        headers: {
            "Content-Type": "application/json",
            "Key": "838B7A0",
            "SessionId": "79ca2365-f989-45e3-8bc5-229f5f178f69"
        },
        method: 'GET'
    })
        .then((response) => {
            return response.json();
        })
}