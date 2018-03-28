import React, { Component } from 'react';

class Comment extends React.Component {
    constructor(props) {
        super(props)


    }

    render() {

        return (
            <li class="collection-item avatar col s6 offset-s3">
            <div className="row">
            <div className="col s3">
                <img src="http://appninja.co/_include/img/profile/profile-01.jpg" alt="" className="circle col s12" />
                <span className="title titleName">NINJA</span>
                </div>
                <p className="col s8">dfafefefewfewfewgwwerwegrwgewgrgwegwgrgbdfdsbvdsdsff fdsf 
                    sdf dsfdsfdsfdsf dsf sdf dsf dsf dsfds fdsg erwgr ewteriotjitryjeroti it jypwtrij yertpi jyerti yjertp ijyertpoi jyerti jyeroit jyeroit jyeorit jyeieorj ihjw toihjw rpotihj woitrphj woitrjh woitrj hwoitrhj wiptrhj wpirtjh wpitrjh wiptrhj woiptr hjwoitr hjwoithr 
                    </p>
                </div>
            
            </li>
        )
    }
}

export {
    Comment
}