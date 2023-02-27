import React from "react";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import postData from "../postData";

export default function Hompage() {
  const post = postData.map((data) => {
    return <Post key={data.id} {...data} />;
  });
  return (
    <div>
      <Navbar />
      <div>
        <img className="profile-pic" />
        <p>Your Name</p>
      </div>
      <main>
        <div className="feed-container">{post}</div>
        <div className="wishlist-container"></div>
        <div className="favorites"></div>
      </main>
    </div>
  );
}
