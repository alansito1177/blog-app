import React from "react";

function CreatePost() {
  return (
    <div className="CreatePostPage">
      <div className="container">
        <h1>Create a post</h1>
        <div>
          <label>Title:</label>
          <input placeholder="Title..." />
        </div>
        <div>
          <label>Post:</label>
          <textarea placeholder="post.." />
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
