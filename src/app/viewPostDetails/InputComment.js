import React from 'react';

class InputComment extends React.Component {

    render() {

        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6 offset-s2">
                            <i className="material-icons prefix"></i>
                            <div className="abcd">
                           <div className="postCommentBox"> <textarea id="icon_prefix2" className="materialize-textarea textColor" placeholder="Enter your comment..."></textarea>
                        </div>
                        </div>
                        <button className="btn  buttonForm" type="submit" name="action">
                        <i className="material-icons sendButton ">POST</i></button></div>
                    </div>
                </form>

            </div>
        )
    }
}

export {
    InputComment
}