import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import Posts from './posts';
import  UserList from './userlist';
import Comment from './comments';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="main">
        <Route exact path="/"           component={UserList}/>
        <Route exact path="/posts/:id"  component={Posts} />
        <Route path="/comments/:id"     component={Comment}/>
      </div>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
