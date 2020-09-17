import React from 'react';
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchedPosts";
import './style.css';
import Theme from "./components/Theme";


function App() {
  return (
    <div className="container pt3">
      <div className="row">
        <div className="col">
          <Theme />
          <PostForm />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2>Sync Posts</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Async Posts</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
