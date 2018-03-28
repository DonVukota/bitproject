import React, { Componenet } from 'react'
import { Link } from 'react-router-dom'

class TextPost extends React.Component {
    constructor(props) {
        super(props)

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