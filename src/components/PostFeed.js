import React from "react";
import Post from "./Post";

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
  name: "Jason Smith",
  updatePost: "random quotes about stuff that I don't understand"
  },
  {
  name: "Jason Smith",
  updatePost: "random quotes about stuff that I don't understand"
  },
];

function PostFeed(){
  return (
    <div className="about">
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