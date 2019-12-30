import React from 'react';
import {Link} from 'react-router-dom';
const UserCard =({user})=>{
    return(
        <div className="user-card">
           
                <img className="img" src="https://www.istockphoto.com/resources/images/HomePage/Tiles/FR/illustrations-809856656_sml.jpg" alt =""/>
                <div className='user-info'>
                   <div className="name"><h3> {user.username}</h3></div>
                   <div className="description"> <h4> {user.company.catchPhrase}</h4></div>
                   <div className="btn">
                       <Link to={`/posts/${user.id}`}>
                      <button ><h2>following</h2></button>
                      </Link>
                      </div>
                    
                </div>
            
        </div>
    )

}
export default UserCard;
