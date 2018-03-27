import React, { Componenet } from 'react';
import { VideoPost } from '../postFeed/VideoPost'
import { TextPost } from '../postFeed/TextPost'
import { ImagePost } from '../postFeed/ImagePost'
import {Comment} from "./Comment"
import { InputComment } from './InputComment'


class ViewPostDetails extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {

        return (

            <div className="container">
                <div className="row">

                    {/* if type of post is... */}
                    <VideoPost />

                    <InputComment/>



                    <ul className="row">
                        <Comment />


                    </ul>
                </div>
            </div>


        )



    }



}

export {
    ViewPostDetails

}
