import React from 'react';

class SingleComment extends React.Component {


    render() {

        return (
            <li className="collection-item avatar col s6 offset-s3">
                <div className="row">
                    <div className="col s3">
                        {/* <img src="http://appninja.co/_include/img/profile/profile-01.jpg" alt="" className="circle col s12" /> */}
                        <span className="title titleName">NINJA</span>
                    </div>
                    <p className="col s8">
                        {this.props.comment.body}
                    </p>
                </div>

            </li>
        )
    }
}

export {
    SingleComment

}