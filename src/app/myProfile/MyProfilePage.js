import React from "react"

class MyProfilePage extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <main>
                <div className="profileCard center">
                    <div className="container">
                        <img className='circle profileImg' src="https://www.crash.net/sites/default//files/styles/article/public/image_importer/MotoGP/712363.jpg?itok=dSwTNoTr" />
                        <h1>Name</h1>
                        <div className="bla" > <p className="aboutSection">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                         and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                         remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
                    </div>
                    <div className="row">
                        <div className="forum"> <i className="material-icons">forum</i><p className="postComment">PostComment</p></div>
                        <div className="comment"> <i className="material-icons">comment</i><p className="CommentNumber">CommentNumber</p></div>
                    </div></div>

            </main>

        )
    }

}

export { MyProfilePage }