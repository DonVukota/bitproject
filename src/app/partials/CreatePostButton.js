import React, { Component } from 'react'
import M from "materialize-css"

class CreatePostButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: "",
            type: ""
        }
    }

    componentDidMount() {
        const floatButton = document.querySelector('.fixed-action-btn');
        const buttonInstance = M.FloatingActionButton.init(floatButton);

        const modalVideo = document.querySelector('#modalVideo');
        M.Modal.init(modalVideo);

        const modalImage = document.querySelector('#modalImage');
        M.Modal.init(modalImage);

        const modalPost = document.querySelector('#modalPost');
        M.Modal.init(modalPost);
    }

    checkVideoUrl = (postData) => {
        let checkStringValueWatch = postData.value.slice(23, 32)
        let checkStringValueEmbed = postData.value.slice(23 - 30)
        let watchAfter = postData.value.slice(32, postData.value.length)
        let embedAfter = postData.value.slice(30, postData.value.length)

        let checkValueFirstPart = postData.value.slice(0, 23);

        if (checkValueFirstPart === "https://www.youtube.com") {
            if (checkStringValueWatch === '/watch?v=' && watchAfter.length === 11) {
                this.props.onCreatePost(postData)

            } else if (checkStringValueEmbed === "/embed/" && embedAfter.length === 11) {
                this.props.onCreatePost(postData)

            } else {
                alert("Video Link is not Valid!!!")
            }
        }
    }

    checkImageUrl = (postData) => {
        let checkValueExtension = postData.value.slice(postData.value.length - 3, postData.value.length)
        if (checkValueExtension === "jpg") {
            this.props.onCreatePost(postData)
        } else {
            alert("Image link not Support!!!")
        }
    }


    createPost = (event) => {
        event.preventDefault();

        const postData = {
            value: this.state.value,
            type: this.state.type,
        }
        if (postData.type === "video") {
            this.checkVideoUrl(postData)
        } else if (postData.type === "image") {
            this.checkImageUrl(postData)
        }

        this.setState({
            value: "",
            type: ""
        })
    }

    onValueChange = (event) => {
        this.setState({
            value: event.target.value,
            type: event.target.getAttribute("data-type")
        })
    }


    // https://www.youtube.com/watch?v=-f57lF0pKSA
    // https://www.youtube.com/embed/7wtfhZwyrcc
    render() {

        return (

            <div className="row">
                {/* BUTTONS AND MODALS */}
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

                {/* VIDEO MODAL */}
                <div id="modalVideo" className="modal">
                    <div className="modal-content">
                        <h4>New Video Post</h4>
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea onChange={this.onValueChange} value={this.state.value} data-type="video" className="materialize-textarea video-make-post" ></textarea>
                                        <label forHtml="textarea1" value="iuygigiug" >URL</label>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <p className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this.createPost}>Post</p>
                    </div>
                </div>

                {/* IMAGE MODAL */}
                <div id="modalImage" className="modal">
                    <div className="modal-content">
                        <h4>New Image Post</h4>
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea onChange={this.onValueChange} value={this.state.value} data-type="image" className="materialize-textarea"></textarea>
                                        <label forHtml="textarea1">URL</label>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this.createPost}>Post</a>
                    </div>
                </div>

                {/* POST MODAL */}
                <div id="modalPost" className="modal">
                    <div className="modal-content">
                        <h4>New Post</h4>
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea onChange={this.onValueChange} value={this.state.value} data-type="text" className="materialize-textarea"></textarea>
                                        <label forHtml="textarea1">What's up?</label>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>

                    <div className="modal-footer">
                        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this.createPost}>Post</a>
                    </div>
                </div>
            </div>
        )
    }
}

export { CreatePostButton }