import React from 'react';
import {
    fetchUsers
} from "../services/fetchUsers";
import { checkPostDate } from "../../shared/checkPostDate";

class SingleUser extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {


        return (




            <div className="row   profilesCard" >
                <div className=" card avatar col s6 offset-s3   profilesCard" >
                    <div className="row " >
                        <div className=" col s3" >
                            <img src={
                                this.props.user.avatarUrl}
                                className="circle col s11 profilesImg " />
                        </div> <h6 className="title titleName profilesName " > {
                            this.props.user.name} </h6> <p className="col s8 profilesAbout" > {this.props.user.aboutShort} </p>
                        <div >
                            <p className="profilesLastPost" > Last Post: < br />
                                {checkPostDate(this.props.user.lastPostDate)}
                            </p>

                        </div>
                    </div>
                </div>
            </div>




        )

    }
}



export {
    SingleUser
}