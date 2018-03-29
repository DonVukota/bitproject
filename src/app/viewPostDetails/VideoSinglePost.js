import React from 'react';
import { getSingleVideoPost } from "../services/fetchSingleVideoPost"

class VideoSinglePost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            videoUrl: "",
            id: this.props.data,
            dateCreated: "",
            userId: "",
            userDisplayName: "",
            type: "",
            commentsNum: 0

        }
    }


    getFeedData() {
        getSingleVideoPost(this.props.data)
            .then((fetchedData) => {

                this.setState({
                    videoUrl: fetchedData.videoUrl,
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
    changeVideoUrl = (inputUrl) => {
        let embededUrl = inputUrl.replace("watch?v=", "embed/")
        return embededUrl
    }



    render() {

        return (




            <div className="videoPost">


                <div className="col s6 offset-s3">
                    <div className="card ">
                        <div className="card-content white-text">
                            <iframe width="100%" height="315" src={this.changeVideoUrl(this.state.videoUrl)} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </div>
                        <div className="card-action">
                            <a >{this.state.userDisplayName}</a>
                            <h6><span>{this.state.commentsNum}</span>comments... collapse comments</h6>
                        </div>
                    </div>
                </div>

            </div>



        )

    }
}



export {
    VideoSinglePost
}
