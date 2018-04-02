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
            "Key": "bitbook",
            "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
        },
        method: "PUT"
    })
})

export {
    fetchEditProfile
}