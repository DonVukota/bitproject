import React, { Component } from 'react';
// import { Link } from "react-router-dom";


class VideoPost extends React.Component {
    constructor(props) {
        super(props)
    }

    changeVideoUrl = (inputUrl) => {
        let embededUrl = inputUrl.replace("watch?v=", "embed/")
        return embededUrl
    }

    render() {

        return (




            <div className="videoPost">

                <div className="col s6 offset-s3">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">

                            <iframe width="100%" height="315" src={this.changeVideoUrl(this.props.data.videoUrl)} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

                        </div>
                        <div className="card-action">
                            <a href="#">{this.props.data.userDisplayName}</a>
                            <h6><span>{this.props.data.commentsNum}</span>comments... collapse comments</h6>
                        </div>
                    </div>
                </div>

            </div>



        )

    }
}



export {
    VideoPost
}

// https:www.youtube.com/watch?v=CwjhxtBmQys 
// https://www.youtube.com/embed/ACmydtFDTGs