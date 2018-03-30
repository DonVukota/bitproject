import React from 'react';
import { fetchUsers } from "../services/fetchUsers"

class SingleUser extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     id: 0,
        //     name: "",
        //     aboutShort: "",
        //     lastPostDate: "",
        //     avatarUrl: ""

        // }
    }


    // getFeedData() {
    //     fetchUsers(this.props.data)
    //         .then((fetchedData) => {

    //             this.setState({
    //                 id: fetchedData.id,
    //                 name: fetchedData.name,
    //                 aboutShort: fetchedData.aboutShort,
    //                 lastPostDate: fetchedData.lastPostDate,
    //                 avatarUrl: fetchedData.avatarUrl,
    //             })
    //         })
    // }
    // componentDidMount() {
    //     // this.getFeedData()
    // }




    render() {
        console.log(this.props.user)

        return (



      
                    <div className="row   profilesCard">
                        <div className=" card avatar col s6 offset-s3   profilesCard">
                            <div className="row ">
                                <div className=" col s3">
                                    <img src={this.props.user.avatarUrl} alt="" className="circle col s11 profilesImg " />
                                </div>
                                <h6 className="title titleName profilesName ">{this.props.user.name}</h6>
                                <p className="col s8 profilesAbout">{this.props.user.aboutShort}</p>
                                <div>
                                    <p className="profilesLastPost"> Last Post:<br />
                                        {this.props.user.lastPostDate}</p>

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
