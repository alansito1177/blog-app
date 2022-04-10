import React from "react";

function CreatePost() {
  return (
    <div className="container p-2">
      <div className="row m-2 justify-content-center">
        <div className="card col-md-7 text-center">
          <div className="card-body">
            <h1>Create a post</h1>
            <div>
              <h3>Title:</h3>
              <input className="input-group" placeholder="Title..." />
            </div>
            <div className="">
              <h3>Post Body:</h3>
              <textarea className="input-group" placeholder="post.." />
            </div>
            <button className=" input-group btn btn-primary mt-3">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
