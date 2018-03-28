import React, { Componenet } from 'react'

import { Link } from 'react-router-dom'

import M from "materialize-css"


class TextPost extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        var floatButton = document.querySelector('.fixed-action-btn');
        var buttonInstance = M.FloatingActionButton.init(floatButton);

        var modalVideo = document.querySelector('#modalVideo');
        var modalInstance = M.Modal.init(modalVideo);

        var modalImage = document.querySelector('#modalImage');
        var modalInstance = M.Modal.init(modalImage);

        var modalPost = document.querySelector('#modalPost');
        var modalInstance = M.Modal.init(modalPost);
    }

    render() {

        return (

            <Link to={`PostDetails/${this.props.data.id}/text`}>
                <div class="row">
                    <div class="col s6 offset-s3">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                                <span class="card-title">{this.props.data.userDisplayName}</span>
                                <p>{this.props.data.text}</p>
                            </div>
                            <div class="card-action">
                                <h6><span>{this.props.data.commentsNum}</span>comments... collapse...</h6>

                            </div>
                        </div>
                    </div>
                </div>
            </Link>





        )
    }


}

export {
    TextPost
}