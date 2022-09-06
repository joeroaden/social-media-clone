import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <React.Fragment>
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