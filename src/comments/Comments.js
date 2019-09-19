import React, { Fragment } from "react";
import PropTypes from "prop-types";
import uuidv4 from "uuidv4";

const Comments = ({ comments }) => {
  return (
    <Fragment>
      {comments.map(comment => (
        <div key={uuidv4()} className="card">
          <h5>{comment.name}</h5>
          <h4>{comment.content}</h4>
        </div>
      ))}
    </Fragment>
  );
};

Comments.propTypes = {
  comments: PropTypes.array.isRequired
};

export default Comments;
