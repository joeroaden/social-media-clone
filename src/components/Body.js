import React from "react";
import Profile from "./Profile";
import PostFeed from "./PostFeed";
import RecommendedAccounts from "./RecommendedAccounts";

function Body(){
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Profile/>
        </div>
        <div className="col-5">
          <PostFeed />
        </div>
        <div className="col-3">
          <RecommendedAccounts />
        </div>
      </div>
    </div>
  );
}

export default Body;