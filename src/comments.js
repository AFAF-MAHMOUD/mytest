import React, { Component } from 'react';
import axios from 'axios';
class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = { comments: [] }
    }
    componentDidMount() {
        const { match: { params } } = this.props;
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(res => {

                const commentPerPost = res.data.filter(post => post.postId == params.id)
                this.setState({
                    comments: commentPerPost
                })

            })
    }
    render() {
        return (
            <div className='list-comment'>
                {this.state.comments.map(el =>{
               return(
                    <div className='comment'>
                        <h3>{el.name}</h3>
                        <h5>{el.body}</h5>
                    </div>)
                })
               
                }
            </div>
        );
    }
}

export default Comment;
