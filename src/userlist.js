import axios from 'axios';
import  React,{Component} from 'react';
import UserCard from './usercard';
class UserList  extends Component {
    constructor(props) {
        super(props);
        this.state = {users:[]  }
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            this.setState({
                users:res.data
            })
        })
    }
    render() { 
        return ( 
            <div className="user-list">
                {this.state.users.map(user=>{
                    return(
                        <UserCard user={user}/>
                    )
                })}
            </div>
         );
    }
}
 
export default UserList;