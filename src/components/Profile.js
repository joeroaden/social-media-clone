import React from "react";

function Profile() {
  return (
    <React.Fragment>
      <div className="blueBox">
        <div className="image"><img src="../../public/assets/images/blank-profile.png" alt="profile pic"/></div>
      </div>
      <div className="profile">
        <h3><emp>John Doe</emp></h3>
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