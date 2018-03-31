import React from 'react'
import M from "materialize-css"

class CreatePostButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: "",
            type: "",
            error: ""
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
                this.setState({
                    error: "Video Link is invalid",
                    value: ""
                })
            }
        } else {
            this.setState({
                error: "Video Link is invalid",
                value: ""
            })
        }
    }

    checkImageUrl = (postData) => {
        // const extensions = ["jpg", "gif", ""]
        let checkValueExtension = postData.value.slice(postData.value.length - 3, postData.value.length)
        if (checkValueExtension === "jpg" || checkValueExtension === "gif" || checkValueExtension === "png" || checkValueExtension === "bpm" || checkValueExtension === "JPG" || checkValueExtension === "GIF" || checkValueExtension === "PNG" || checkValueExtension === "BPM") {
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
            value: " ",
            type: " "
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

                                    <textarea onChange={this.onValueChange} value={this.state.value} data-type="video" className="materialize-textarea video-make-post" ></textarea>
                                    <label htmlFor="textarea1" value="" >URL</label>
                                </div>
                                <p> {this.state.error}</p>


                            </form>
                        </div>

                    </div>
                    <div className="modal-footer">

                        <p className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this.createPost}>Post</p>
                    </div>
                </div>


                <div id="modalImage" className="modal">
                    <div className="modal-content">
                        <h4>New Image Post</h4>
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea onChange={this.onValueChange} value={this.state.value} data-type="image" className="materialize-textarea"></textarea>
                                        <label htmlFor="textarea1">URL</label>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className="modal-footer">

                        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this.createPost}>Post</a>
                    </div>
                </div>
                <div id="modalPost" className="modal">
                    <div className="modal-content">
                        <h4>New Post</h4>
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea onChange={this.onValueChange} value={this.state.value} data-type="text" className="materialize-textarea"></textarea>
                                        <label htmlFor="textarea1">What's up?</label>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>

                    <div className="modal-footer">
                        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this.createPost}>Post</a>
                    </div>
                </div>
            </div >
        )
    }
}

export { CreatePostButton }