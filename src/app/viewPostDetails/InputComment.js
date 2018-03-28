import React, { Component } from 'react';

class InputComment extends React.Component {
    constructor(props) {
        super(props)


    }

    render() {

        return (
            <div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s6 offset-s2">
                            <i class="material-icons prefix"></i>
                            <textarea id="icon_prefix2" class="materialize-textarea" placeholder="Enter your comment..."></textarea>


                        </div>
                        <button class="btn waves-effect waves-light" type="submit" name="action">
                            <i class="material-icons right ">Luka</i></button>
                    </div>
                </form>

            </div>
        )
    }
}

export {
    InputComment
}