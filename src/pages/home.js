import { getDocs, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";

function Home() {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getposts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getposts();
  }, []);

  return (
    <div className="App">
      <div className="fluid-container col-12 mx-auto">
        {postList.map((post) => {
          if (
            post.title == "Log in and create a post" &&
            post.author.name == "Alan Silva"
          )
            return (
              <div key={post.title} className="card bg-dark col-md-6 mx-auto">
                <div className="card-header bg-dark text-light">
                  <h1 className="card-title">{post.title}</h1>
                </div>

                <div className="card  mb-4 ">
                  <p className="card-body p-4">{post.postText}</p>
                </div>
                <p className="mb-0 m-1 text-light position-absolute bottom-0 end-0">
                  @{post.author.name}
                </p>
              </div>
            );
        })}
        {postList
          .slice(0)
          .reverse()
          .map((post) => {
            if (post.title != "Log in and create a post")
              return (
                <div key={post.title} className="card bg-dark col-md-6 mx-auto">
                  <div className="card-header bg-dark text-light">
                    <h1 className="card-title">{post.title}</h1>
                  </div>

                  <div className="card  mb-4 ">
                    <p className="card-body p-4">{post.postText}</p>
                  </div>
                  <p className="mb-0 m-1 text-light position-absolute bottom-0 end-0">
                    @{post.author.name}
                  </p>
                </div>
              );
          })}
      </div>
    </div>
  );
}

export default Home;
