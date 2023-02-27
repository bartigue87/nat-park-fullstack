import React, { useState } from "react";
import "./Post.css";

export default function Post(props) {
  return (
    <div>
      <img className="post-image" src={props.image} />
      <h2>{props.parkName}</h2>
      <p>{props.favThing}</p>
      <p>{props.likes}</p>
      <p>
        {props.commentSection[0].username}: {props.commentSection[0].comment}
      </p>
    </div>
  );
}
