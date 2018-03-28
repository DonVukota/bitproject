import React, { Componenet } from 'react'
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

            <div className="row">
                <div className="col s6 offset-s3">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Card Title</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div className="card-action">
                            <a href="#">This is a link</a>
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export {
    TextPost
}