import React, { Componenet } from 'react'

class ImagePost extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (

            <div className="videoPost">

                <div className="col s6 offset-s3">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <img width="100%" src={this.props.data.imageUrl} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></img>
                        </div>
                        <div className="card-action row">
                            <a href="#">{this.props.data.userDisplayName}</a>
                            <p><span>{this.props.data.commentsNum}</span> Comments...</p>
                        </div>
                    </div>
                </div>

            </div>





        )
    }


}

export {
    ImagePost
}