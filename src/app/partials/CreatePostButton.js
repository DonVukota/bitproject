import React from 'react'
import M from "materialize-css"

class CreatePostButton extends React.Component {



    componentDidMount() {
        var floatButton = document.querySelector('.fixed-action-btn');
        var buttonInstance = M.FloatingActionButton.init(floatButton);

        var modalVideo = document.querySelector('#modalVideo');
        var videoModalInstance = M.Modal.init(modalVideo);

        var modalImage = document.querySelector('#modalImage');
        var imageModalInstance = M.Modal.init(modalImage);

        var modalPost = document.querySelector('#modalPost');
        var postModalInstance = M.Modal.init(modalPost);
    }

    render() {

        return (

            <div className="row">
                {/* <div className="col s6 offset-s3">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Card Title</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div className="card-action">
                            <a>This is a link</a>
                            <a>This is a link</a>
                        </div>
                    </div>
                </div> */}


                <div className="fixed-action-btn horizontal click-to-toggle">
                    <a className="btn-floating btn-large red">
                        <i className="large material-icons">mode_edit</i>
                    </a>
                    <ul>
                        <li><a className="btn-floating red modal-trigger" href="#modalVideo"><i className="material-icons">video_library</i></a></li>
                        <li><a className="btn-floating green modal-trigger" href="#modalImage"><i className="material-icons">photo_library</i></a></li>
                        <li><a className="btn-floating blue modal-trigger" href="#modalPost"><i className="material-icons">textsms</i></a></li>
                    </ul>
                </div>


                <div id="modalVideo" className="modal">
                    <div className="modal-content">
                        <h4>New Video Post</h4>
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea id="textarea1" className="materialize-textarea"></textarea>
                                        <label htmlFor="textarea1">URL</label>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Post</a>
                    </div>
                </div>


                <div id="modalImage" className="modal">
                    <div className="modal-content">
                        <h4>New Image Post</h4>
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea id="textarea1" className="materialize-textarea"></textarea>
                                        <label htmlFor="textarea1">URL</label>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Post</a>
                    </div>
                </div>


                <div id="modalPost" className="modal">
                    <div className="modal-content">
                        <h4>New Post</h4>
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea id="textarea1" className="materialize-textarea"></textarea>
                                        <label htmlFor="textarea1">What's up?</label>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>

                    <div className="modal-footer">
                        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Post</a>
                    </div>
                </div>
            </div>
        )
    }
}

export { CreatePostButton }