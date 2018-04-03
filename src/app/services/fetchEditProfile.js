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
            "SessionId": "781ed13e-c604-495b-b94e-08723708329b"
        },
        method: "PUT"
    })
})

export {
    fetchEditProfile
}