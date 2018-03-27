import React, { Component } from 'react';


class VideoPost extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {

        return (
            <div className="videoPost">

                <div className="col s6 offset-s3">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/ACmydtFDTGs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </div>
                        <div className="card-action">
                            <a href="#">Video Post</a>
                            <a href="#">!!!count comments!!!</a>
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