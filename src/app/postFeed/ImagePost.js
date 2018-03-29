import React from 'react'
import { Link } from 'react-router-dom'

class ImagePost extends React.Component {


    render() {

        return (
            <Link to={`PostDetails/${this.props.data.id}/image`}>
                <div className="videoPost">

                    <div className="col s6 offset-s3">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">

                                <img width="100%" src={this.props.data.imageUrl} frameBorder="0" allow="autoplay; encrypted-media" alt=' is not valid .|.' allowFullScreen></img>
                            </div>
                            <div className="card-action row">
                                <p>{this.props.data.userDisplayName}</p>
                                <p><span>{this.props.data.commentsNum}</span> Comments...</p>

                            </div>
                        </div>
                    </div>

                </div>

            </Link>



        )
    }


}

export {
    ImagePost
}