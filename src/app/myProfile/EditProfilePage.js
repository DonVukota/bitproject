import React, { Component } from 'react'



class EditProfilePage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="modal1" className="modal editModal">
                <div className="modal-content editModal2">
                    <h4>Update Profile</h4>
                    <div className='row editProfile'>
                        <p className='noMarg' href="https://placeholder.com"><img className='editPic' src="http://via.placeholder.com/150x100" /></p>
                        <button className="btn waves-effect waves-light btn-small button" type="submit" name="action">UPLOAD PHOTO</button>
                    </div>
                </div>
                <div className="row inputName">
                    <div className="input-field col s6">
                        <input placeholder='Full Name' id="first_name2" type="text" className="validate" />
                        <label className="active" for="first_name2">Name</label>
                    </div>
                </div>
                <div className="row inputDesc">
                    <div className="input-field col s6">
                        <input placeholder='input your description here' id="first_name2" type="text" className="validate" />

                    </div>
                </div>
                <div className='buttonsOfModelUser'>
                    <p className="waves-effect waves-light btn">CLOSE</p>
                    <p className="waves-effect waves-light btn">UPDATE</p>
                </div>

            </div>
        )
    }
}
export {
    EditProfilePage
}