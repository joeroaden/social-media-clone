import React from "react";
import PropTypes from "prop-types";
import img from '../blank-profile.png';

function Post(props) {
  return (
    <React.Fragment>
      <img className="profileImage" src={img} alt="profile pic" width="45" height="45"/>
    <h4>{props.name}</h4>
    <p>{props.updatePost}</p>
    <hr/>
    </React.Fragment>
  );
}

Post.propTypes = {
  name: PropTypes.string,
  updatePost: PropTypes.string
};

export default Post;