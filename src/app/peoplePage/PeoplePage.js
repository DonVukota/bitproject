import React from 'react';


class PeoplePage extends React.Component {

    constructor(props) {
        super(props)



    }

    render() {

        return (
            <main>
                <nav className="searchBar">
                    <div class="nav-wrapper">
                        <form>
                            <div class="input-field ">
                                <input className="" id="search" type="search" required />
                                <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                                <i class="material-icons">close</i>
                            </div>
                        </form>
                    </div>
                </nav>

                <div className=" container mainFeed ">
                    <div className="row">


                        <li className=" card commentCard collection-item avatar col s6 offset-s3">
                            <div className="row ">
                                <div className=" col s3">
                                    <img src="http://appninja.co/_include/img/profile/profile-01.jpg" alt="" className="circle col s11 commentAvatar" />
                                    <h6 className="title titleName avatarName ">asdasdasdas</h6>
                                </div>
                                <p className="col s8 commentBox">
                                    asdasdasdasd
                            </p>
                            </div>
                        </li>
                    </div>
                </div>
            </main>
        )
    }
}
export {
    PeoplePage
}