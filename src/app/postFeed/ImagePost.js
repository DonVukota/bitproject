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
                            <img width="100%" src="http://atgbcentral.com/data/out/185/5614939-images.jpg" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></img>
                        </div>
                        <div className="card-action row">
                            <a href="#">Image Post</a>
                            <a href="#">!!!count comments!!!</a>
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