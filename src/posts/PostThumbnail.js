import React from "react";
import { Link } from "react-router-dom";

const PostThumbnail = ({ title, author, published, comments, id }) => {
  return (
    <div className="card grid-2">
      <div>
        <ul>
          <li>
            <h3>
              <Link to={`/comments/${id}`}>{title}</Link>
            </h3>
          </li>
          <li>
            {comments.length} {comments.length !== 1 ? "comments" : "comment"}
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            Posted by {author} on {published}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PostThumbnail;
