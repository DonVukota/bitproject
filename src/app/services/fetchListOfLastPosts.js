export const getListOfLastPosts = () => {
    return fetch("http://bitbookapi.azurewebsites.net/api/Posts", {
        headers: {
            "Content-Type": "application/json",
            "Key": "bitbook",
            "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
        },
        method: 'GET'
    })
        .then((response) => {
            return response.json();
        })
}
// const postData = ((VideoObject) => {
//     return fetch("http://bitbookapi.azurewebsites.net/api/Posts", {
//         body: JSON.stringify(VideoObj),
//         headers: {
//             "Content-Type": "application/json",
//             "Key": "bitbook",
//             "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
//         },
//         method: "POST"
//     })
// })