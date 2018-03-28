import React, { Component } from 'react'
import { VideoPost } from './VideoPost'
import { TextPost } from './TextPost'
import { ImagePost } from './ImagePost'

import { getListOfLastPosts } from "../services/fetchListOfLastPosts"

import { CreatePostButton } from '../partials/CreatePostButton';


class FeedPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfLastPosts: []
        }
    }

    getFeedData() {
        getListOfLastPosts()
            .then((fetchedData) => {
                this.setState({
                    listOfLastPosts: fetchedData
                })
            })
    }
    componentDidMount() {
        this.getFeedData()
    }

    render() {
        return (



            <div className=" container row">

                {this.state.listOfLastPosts.map((postProperties) => {
                    if (postProperties.type === "video") {
                        return <VideoPost data={postProperties} />
                    } else if (postProperties.type === "image") {
                        return <ImagePost data={postProperties} />
                    } else if (postProperties.type === "text") {
                        return <TextPost data={postProperties} />
                    } return <h1> LOADING... </h1>

                })}
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
