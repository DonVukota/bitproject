export const fetchProfile = () => {
    return fetch("http://bitbookapi.azurewebsites.net/api/profile/", {
            headers: {
                "Content-Type": "application/json",
                "Key": "bitbook",
                "SessionId": "781ed13e-c604-495b-b94e-08723708329b"
            },
            method: 'GET'
        })
        .then((response) => {
            return response.json();
        })
}