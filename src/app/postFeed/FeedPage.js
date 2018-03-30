import React from 'react'
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
    }
    componentDidMount() {
        this.getFeedData()
    }

    createPost = (postInputData) => {
        if (postInputData.type === 'video') {
            fetchCreateVideoPost(postInputData).then(() => this.getFeedData());
            // .then(this.getFeedData());
        } else if (postInputData.type === 'image') {
            fetchCreateImagePost(postInputData).then(() => this.getFeedData());
            // .then(this.getFeedData())
        } else if (postInputData.type === 'text') {
            fetchCreateTextPost(postInputData).then(() => this.getFeedData());
            // .then(this.getFeedData())
        }

        // location.replace("http://localhost:3000/#/")

        // console.log(postInputData);
        // user fetch service to create post
        // fetch new post list (refresh list not page!!!!)
    }

    render() {
        return (
            <main>
                <div className=" container mainFeed ">
                    <div className="row">
                        {this.state.listOfLastPosts.map((postProperties, index) => {
                            if (postProperties.type === "video") {
                                return <VideoPost data={postProperties} key={index} />
                            } else if (postProperties.type === "image") {
                                return <ImagePost data={postProperties} key={index} />
                            } else if (postProperties.type === "text") {
                                return <TextPost data={postProperties} key={index} />
                            } return <h1> LOADING... </h1>

                        })}
                        <CreatePostButton onCreatePost={this.createPost} />

                    </div>
                </div>
            </main>
        )

    }
}

export {
    FeedPage
}
