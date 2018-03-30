import React from 'react';
import { getCommentsByPostId } from "../services/fetchCommentsByPostId"
import { SingleComment } from "./SingleComment"
import { InputComment } from './InputComment';
import {fetchCreateComment} from "../services/fetchCreateComment.js"


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
                        listOfComments: commentsList.reverse()
                    })
                })
        }

    

        componentDidMount() {
            this.getFeedData()
        }

        createComment = (commentBody) => {
            fetchCreateComment(commentBody,this.props.postId)
            .then(()=>this.getFeedData())
        }
        render() {

            return (
                <div>
                    <InputComment createComment={this.createComment} />
                    {this.state.listOfComments.map((singlecomment) => {
                        return <SingleComment comment={singlecomment} />
                    })}
                </div>

            )
        }
    }

export {
    Comment
}