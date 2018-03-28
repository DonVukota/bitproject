import React, { Component } from 'react'
import { VideoPost } from './VideoPost'
import { TextPost } from './TextPost'
import { ImagePost } from './ImagePost'

class FeedPage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (

            <div className=" container row">
                <VideoPost />
                <TextPost />
                <ImagePost />
            </div>)
    }
}

export {
    FeedPage
}

// posts = [{type:"img"},{type:"vid"},{type:"text"}]

// renderPost = () =? {
//     if props.type === img 
//         return ImagePost
// }


// PostItem = () => (div
//     renderPost()
//     div)
