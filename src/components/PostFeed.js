import React from "react";
import Post from "./Post";
import img from '../blank-profile.png';

const newsFeed = [
  {
  name: "Rusty Shackleford",
  updatePost: "random quotes about stuff"
  },
  {
  name: "Rex Scott",
  updatePost: "random quotes about more stuff"
  },
  {
  name: "Jason Smith",
  updatePost: "random quotes about stuff that I don't understand"
  },
  {
  name: "Felix Conrad",
  updatePost: "random quotes about stuff that I don't understand"
  },
  {
  name: "Eric Delaney",
  updatePost: "random quotes about stuff that I don't understand"
  },
];

function PostFeed(){
  return (
    <div className="about">
      <img className="postImage" src={img} alt="profile pic" width="45" height="45"/>
      <h4><span className="post">What's Happening?</span></h4>
      <hr/>
      {newsFeed.map((post, index) =>
      <Post name={post.name}
      updatePost ={post.updatePost} 
      key={index}/>
      )}
    </div>

  )
}

export default PostFeed;