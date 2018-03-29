import React from 'react';

class InputComment extends React.Component {

    render() {

        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6 offset-s2">
                            <i className="material-icons prefix"></i>
                            <textarea id="icon_prefix2" className="materialize-textarea" placeholder="Enter your comment..."></textarea>


                        </div>
                        <button className="btn waves-effect waves-light" type="submit" name="action">
                            <i className="material-icons right ">Luka</i></button>
                    </div>
                </form>

            </div>
        )
    }
}

export {
    InputComment
}