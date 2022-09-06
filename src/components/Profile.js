import React from "react";
import img from './blank-profile.png';

function Profile() {
  return (
    <React.Fragment>
      <div className="blueBox">
        <div className="image"><img src={img}alt="profile pic" width="75" height="75"/> </div>
      </div>
      <div className="profile">
        <h3 className="name"><emp>John Doe</emp></h3>
        <h6>TWEETS   FOLLOWING   FOLOLOWERS</h6>
      </div>
      <div className ="about">
        <p>This is an about section, this is where you see what its all about.
        This is an about section, this is where you see what its all about.
        This is an about section, this is where you see what its all about.
        This is an about section, this is where you see what its all about.
        This is an about section, this is where you see what its all about.
        This is an about section, this is where you see what its all about.
        This is an about section, this is where you see what its all about.
        </p>

      </div>
    </React.Fragment>
  );
}

export default Profile;