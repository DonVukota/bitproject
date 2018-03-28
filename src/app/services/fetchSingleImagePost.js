export const getSingleImagePost = (imageId) => {
    return fetch("http://bitbookapi.azurewebsites.net/api/ImagePosts/" + imageId, {
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