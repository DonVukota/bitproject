import React from 'react';
import {
    fetchProfile
} from "../services/fetchProfile"

class SingleComment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            avatarUrl: ""

        }
    }
    getFeedData() {
        fetchProfile()
            .then((fetchedData) => {
                this.setState({
                    avatarUrl: fetchedData.avatarUrl,

                })
            })
    }

    componentDidMount() {
        this.getFeedData()
    }

    render() {

        return (
            <li className=" card commentCard collection-item avatar col s6 offset-s3">
                <div className="row ">
                    <div className=" col s3">
                        <img src={this.state.avatarUrl} alt="" className="circle col s11 commentAvatar" />
                        <h6 className="title titleName avatarName ">{this.props.comment.authorName}</h6>
                    </div>
                    <p className="col s8 commentBox">
                        {this.props.comment.body}dsfdsfdsfdsfdsfdsfdsfd fdsfdsfdsfdsfdsfdsfdsfds
                    </p>
                </div>
            </li>
        )
    }
}

export {
    SingleComment

}
            // <li className=" card   commentCard collection-item avatar col s6 offset-s3">
            //     <div className="row">
            //         <div className=" col s3">
            //             <img src="http://appninja.co/_include/img/profile/profile-01.jpg" alt="" className="circle col s12 commentAvatar"  />
            //             <span className="title titleName avatarName ">Kyrillos Wanjala</span>
            //             <p className="col s8">
            //             {this.props.comment.body}
            //         </p>
            //         </div>
            //         </div>
            //         </li>