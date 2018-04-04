import {header} from "../../shared/headerData.js"

const fetchEditProfile = ((name, description, image, about, email) => {
    return fetch("http://bitbookapi.azurewebsites.net/api/Profiles", {
        body: JSON.stringify({
            name: name,
            aboutShort: description,
            avatarUrl: image,
            about: about,
            email: email
        }),
        headers: {
            "Content-Type": "application/json",
            "Key": "838B7A0",
            "SessionId": "79ca2365-f989-45e3-8bc5-229f5f178f69"
        },
        method: "PUT"
    })
})

export {
    fetchEditProfile
}