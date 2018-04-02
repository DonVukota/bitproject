import React from 'react';
import { SingleUser } from '../peoplePage/SingleUser'
import { fetchUsers } from "../services/fetchUsers"
import { SearchPeople } from "./SearchPeople"

class UsersPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            listOfUsers: [],
            filteredUsers: [],
            searchValue: ""
        }
    }

    getFeedData() {
        fetchUsers(this.props.postId)
            .then((userList) => {
                this.setState({
                    listOfUsers: userList,
                    filteredUsers: userList
                })
            })
    }


    componentDidMount() {
        this.getFeedData()
    }



    searchUser = (event) => {
        this.setState({ searchValue: event.target.value });

        const filteredUsers = this.state.listOfUsers.filter((user) => {
            if (user.name.includes(event.target.value)) {
                return user
            }
        })

        this.setState({
            filteredUsers
        })
    }

    render() {
        return (
            <main >
                <SearchPeople value={this.state.searchValue} filterUsers={this.searchUser} />
                <div className=" container mainFeed "  >
                    {
                        this.state.filteredUsers.map((singleUser) => {
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