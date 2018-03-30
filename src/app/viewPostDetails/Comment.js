import React from 'react';
import { getCommentsByPostId } from "../services/fetchCommentsByPostId"
import { SingleComment } from "./SingleComment"

class Comment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfComments: []
        }
    }

    getFeedData() {
        getCommentsByPostId(this.props.postId)
            .then((commentsList) => {
                this.setState({
                    listOfComments: commentsList
                })
            })
    }
    componentDidMount() {
        this.getFeedData()
    }
    render() {
        return (
            this.state.listOfComments.map((singlecomment) => {
                return <SingleComment comment={singlecomment} />
            })
        )
    }
}

export {
    Comment
}