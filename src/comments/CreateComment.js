import React, { useContext, useState } from "react";
import PostContext from "../context/posts/postContext";
import uuidv4 from "uuidv4";

const CreateComment = ({
  postTitle,
  postContent,
  postAuthor,
  postPublished,
  postComments,
  currId
}) => {
  const postContext = useContext(PostContext);
  const [nameState, setNameState] = useState("");
  const [commentState, setCommentState] = useState("");

  const setName = e => {
    setNameState(e.target.value);
  };

  const setComment = e => {
    setCommentState(e.target.value);
  };

  const submitComment = () => {
    postComments.push({ name: nameState, content: commentState, id: uuidv4() });
    const newPostWithComment = {
      title: postTitle,
      content: postContent,
      author: postAuthor,
      published: postPublished,
      comments: postComments,
      id: currId
    };
    setCommentState("");
    postContext.createComment(newPostWithComment);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter your name"
        onChange={setName}
      ></input>
      <input
        type="text"
        placeholder="Enter your comment"
        onChange={setComment}
      ></input>
      <input
        type="submit"
        value="Comment"
        onClick={submitComment}
        className="btn bg-dark"
      />
    </div>
  );
};

export default CreateComment;
