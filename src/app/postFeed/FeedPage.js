import React, { Component } from 'react'
import { VideoPost } from './VideoPost'
import { TextPost } from './TextPost'
import { ImagePost } from './ImagePost'

import { getListOfLastPosts } from "../services/fetchListOfLastPosts"

import { CreatePostButton } from '../partials/CreatePostButton';
import { fetchCreateVideoPost } from "../services/fetchCreateVideoPost"
import { fetchCreateImagePost } from '../services/fetchCreateImagePost'
import { fetchCreateTextPost } from '../services/fetchCreateTextPost'


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
        console.log('sfasfafas')
    }
    componentDidMount() {
        this.getFeedData()
    }

    createPost = (postInputData) => {
        if (postInputData.type === 'video') {
            fetchCreateVideoPost(postInputData)
            this.getFeedData();
        } else if (postInputData.type === 'image') {
            fetchCreateImagePost(postInputData)
            this.getFeedData()
        } else if (postInputData.type === 'text') {
            fetchCreateTextPost(postInputData)
            this.getFeedData()
        }

        // console.log(postInputData);
        // user fetch service to create post
        // fetch new post list (refresh list not page!!!!)
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

                <CreatePostButton onCreatePost={this.createPost} />
            </div>)

    }
}

export {
    FeedPage
}
