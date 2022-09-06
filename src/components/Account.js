import React from "react";
import PropTypes from "prop-types";
import img from '../blank-profile.png';

function Account(props){
  return(
    <React.Fragment>
      <img className="profileImage" src={img} alt="profile pic" width="30" height="30"/>
      <h4>{props.name}</h4>
      <p>Add Friend</p>
    </React.Fragment>
  );
}

Account.propTypes = {
  name: PropTypes.string
};

export default Account;