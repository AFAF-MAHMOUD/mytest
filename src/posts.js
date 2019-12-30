import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [] }
    }
    componentDidMount() {
        const { match: { params } } = this.props;
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                const postsPerUser = res.data.filter(post => post.userId == params.id)
                this.setState({
                    posts: postsPerUser
                })
            })

    }
    render() {
        return (
            <div className='list-post'>
                {
                    this.state.posts.map(post => {
                        return (

                            <div className='post'>
                                <Link to={`/comments/${post.id}`}>
                                    <div className="post-img">

                                        <img className="post-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFmZ3qNMV_4LliBbUKVZsx3RPhABkf53XKiKW9BTlXHk5hl2PL&s" />
                                    </div>
                                    <div className="post-title"> <h3> {post.title}</h3></div>
                                    <div className="post-body"> <h5>      {post.body}   </h5></div>
                                </Link>
                            </div>

                        )
                    })
                }

            </div>

        );
    }
}

export default Posts;
