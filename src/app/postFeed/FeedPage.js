import React, { Component } from 'react'
import { VideoPost } from './VideoPost'
import { TextPost } from './TextPost'
import { ImagePost } from './ImagePost'
import { CreatePostButton } from '../partials/CreatePostButton';

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
                <CreatePostButton />
            </div>
        )
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
