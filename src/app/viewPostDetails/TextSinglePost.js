import React, { Component } from 'react';
import { getSingleTextPost } from "../services/fetchSingleTextPost"

class TextSinglePost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            id: this.props.data,
            dateCreated: "",
            userId: "",
            userDisplayName: "",
            type: "",
            commentsNum: 0

        }
    }


    getFeedData() {
        getSingleTextPost(this.props.data)
            .then((fetchedData) => {

                this.setState({
                    text: fetchedData.text,
                    dateCreated: fetchedData.dateCreated,
                    userId: fetchedData.userId,
                    userDisplayName: fetchedData.userDisplayName,
                    type: fetchedData.type,
                    commentsNum: fetchedData.commentsNum
                })
            })
    }
    componentDidMount() {
        this.getFeedData()
    }




    render() {

        return (




            <div class="row">
                <div class="col s6 offset-s3">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">{this.state.userDisplayName}</span>
                            <p>{this.state.text}</p>
                        </div>
                        <div class="card-action">
                            <h6><span>{this.state.commentsNum}</span>comments... collapse...</h6>

                        </div>
                    </div>
                </div>
            </div>



        )

    }
}



export {
    TextSinglePost
}
