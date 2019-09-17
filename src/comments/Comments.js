import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Comments = ({ comments }) => {
  return (
    <Fragment>
      {comments.map(comment => (
        <div>
          <h5>{comment.name}</h5>
          <h5>{comment.content}</h5>
        </div>
      ))}
    </Fragment>
  );
};

Comments.propTypes = {
  comments: PropTypes.array.isRequired
};

export default Comments;
