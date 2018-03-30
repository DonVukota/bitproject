import React from "react"
import { fetchProfile } from '../services/fetchProfile'
import M from "materialize-css"
class MyProfilePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userId: 0,
            name: "",
            email: "",
            aboutShort: "",
            about: "",
            avatarUrl: "",
            postsCount: this.props.data,
            commentsCount: this.props.data,


        }
    }

    getFeedData() {
        fetchProfile()
            .then((fetchedData) => {
                this.setState({
                    userId: fetchedData.userId,
                    name: fetchedData.name,
                    email: fetchedData.email,
                    aboutShort: fetchedData.aboutShort,
                    avatarUrl: fetchedData.avatarUrl,
                    postsCount: fetchedData.postsCount,
                    commentsCount: fetchedData.commentsCount
                })
            })
    }

    componentDidMount() {
      const modalButton= document.querySelector('.modal');
        M.Modal.init(modalButton);
        this.getFeedData()
    }

    render() {
        return (
            <main>
                <div className="profileCard center">
                    <div className="container">
                        <img className='circle profileImg' src={this.state.avatarUrl} alt="" />
                        <h1>{this.state.name}</h1>
                        <div className="bla" > <p className="aboutSection">{this.state.aboutShort}</p></div>
                    </div>
                    <div className="row">
                        <div className="forum"> <i className="material-icons">forum</i><p className="postComment">Number of posts: {this.state.postsCount}</p></div>
                        <div className="comment"> <i className="material-icons">comment</i><p className="CommentNumber">Number of comments: {this.state.commentsCount}</p></div>
                    </div>
                     <p className="waves-effect waves-light btn modal-trigger" href="#modal1">Edit Profile</p>
                    </div>

                 <div id="modal1" className="modal">
                      <div className="modal-content">
                             <h1>Update Profile</h1>
                             <div className='row'>
                             <p href="https://placeholder.com"><img src="http://via.placeholder.com/200x50"/></p>
                             <button class="btn waves-effect waves-light" type="submit" name="action">UPLOAD PHOTO
                                <i class="material-icons right">send</i>
                            </button>
                            </div>
                      </div>
                  <div className="modal-footer">
                       <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                 </div>
  </div>

            </main>

        )
    }

}

export { MyProfilePage }