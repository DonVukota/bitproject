import React, { Component } from 'react';
import { VideoPost } from '../postFeed/VideoPost'
import { TextPost } from '../postFeed/TextPost'
import { ImagePost } from '../postFeed/ImagePost'
import { Comment } from "./Comment"
import { InputComment } from './InputComment'
import { VideoSinglePost } from "./VideoSinglePost"
import { TextSinglePost } from "./TextSinglePost"
import { ImageSinglePost } from "./ImageSinglePost"


class ViewPostDetails extends React.Component {
    constructor(props) {
        super(props)

    }
    checkType = () => {
        if (this.props.match.params.type === "video") {
            return < VideoSinglePost data={this.props.match.params.id} />
        } else if (this.props.match.params.type === "text") {
            return < TextSinglePost data={this.props.match.params.id} />
        } else return <ImageSinglePost data={this.props.match.params.id} />
    }

    render() {

        return (
            <main>
                <div className="container">
                    <div className="row">



                        {this.checkType()}
                        <InputComment />

                        <ul className="row">
                            <Comment />


                        </ul>

                    </div>
                </div>
            </main >


        )



    }



}

export {
    ViewPostDetails

}
