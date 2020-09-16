import React from 'react'
import Post from "./Post";

export default ({posts}) => {
  if (!posts.length) {
    return <h5>Add posts</h5>
  }
  return posts.map(post => <Post post={post} key={post} />)
}
