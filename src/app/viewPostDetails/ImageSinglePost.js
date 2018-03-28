import React, { Component } from 'react';
import { getSingleImagePost } from "../services/fetchSingleImagePost"

class ImageSinglePost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageUrl: "",
            id: this.props.data,
            dateCreated: "",
            userId: "",
            userDisplayName: "",
            type: "",
            commentsNum: 0

        }
    }


    getFeedData() {
        getSingleImagePost(this.props.data)
            .then((fetchedData) => {

                this.setState({
                    imageUrl: fetchedData.imageUrl,
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




            <div className="videoPost">

                <div className="col s6 offset-s3">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <img width="100%" src={this.state.imageUrl} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></img>
                        </div>
                        <div className="card-action row">
                            <a href="#">{this.state.userDisplayName}</a>
                            <p><span>{this.state.commentsNum}</span> Comments...</p>
                        </div>
                    </div>
                </div>

            </div>



        )

    }
}



export {
    ImageSinglePost
}
