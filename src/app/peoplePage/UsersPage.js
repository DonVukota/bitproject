import React from 'react';
import {
    SingleUser
} from '../peoplePage/SingleUser'
import {
    fetchUsers
} from "../services/fetchUsers"

class UsersPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            listOfUsers: [],
            searchValue: ""
        }



    }

    getFeedData() {
        fetchUsers(this.props.postId)
            .then((userList) => {
                this.setState({
                    listOfUsers: userList,
                    searchValue: ""
                })
            })
    }

    componentDidMount() {
        this.getFeedData()
    }
    searchUser = (event) => {
        this.setState({
            searchValue: event.target.value
        })
        console.log(this.state.searchValue)
    }

    render() {

        return (
            <main>
                <nav className="searchBar">
                    <div class="nav-wrapper">
                        <form>
                            <div class="input-field ">
                                <input className="" onChange={this.searchUser} value={this.state.searchValue} id="search" type="search" required />
                                <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                                <i class="material-icons">close</i>
                            </div>
                        </form>
                    </div>
                </nav>

                <div className=" container mainFeed ">

                    {this.state.listOfUsers.map((singleUser) => {
                        return <SingleUser user={singleUser} />
                    })
                    }

                </div>
            </main>
        )
    }
}
export {
    UsersPage
}