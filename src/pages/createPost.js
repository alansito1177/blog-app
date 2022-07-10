import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import Form from "@rjsf/core";
function CreatePost({ isAuth }) {
  //const [title, setTitle] = useState("");
  //const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async (title, postText) => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      //navigate("/login");
    }
  }, []);

  const schema = {
    type: "object",
    title: "Create A Post",
    properties: {
      Title: {
        type: "string",
        title: "Title",
      },
      PostBody: {
        type: "string",
        title: "Post Body",
      },
      submit: {
        type: "string",
        title: "Submit Post",
      },
    },
    required: ["Title", "PostBody"],
  };

  const uiSchema = {
    Title: { "ui:placeholder": "Title..." },
    PostBody: {
      "ui:widget": "textarea",
      "ui:placeholder": "Post...",
    },
    submit: {
      classNames: "noTitle",
      "ui:widget": (e) => {
        console.log(e.formData);
        return (
          <input
            type="submit"
            className="btn btn-primary col-12 mt-2"
            value="Submit Post"
          />
        );
      },
    },
    "ui:submitButtonOptions": {
      norender: true,
    },
  };
  return (
    <div className="fluid-container App p-2">
      <div className="row m-2 justify-content-center">
        <div className="card col-md-5 text-center">
          <div className="card-body">
            {/* <h1>Create a post</h1>
            <div>
              <h3>Title:</h3>
              <input
                className="input-group"
                placeholder="Title..."
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div className="">
              <h3>Post Body:</h3>
              <textarea
                className="input-group"
                placeholder="post.."
                onChange={(event) => {
                  setPostText(event.target.value);
                }}
              />
            </div>
            <button
              className="input-group btn btn-primary mt-3"
              onClick={createPost}
            >
              Submit Post
            </button> */}

            <Form
              schema={schema}
              uiSchema={uiSchema}
              onSubmit={async (e) => {
                createPost(e.formData.Title, e.formData.PostBody);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
