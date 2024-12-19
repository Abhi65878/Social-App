import React from 'react'
import "./Post.css"
export default function Post({key, name, user_image, post_image, content, likes, comments, shares}) {
  return (
    <div className="main-container">
      <div className="first-div">
        <div className="User-info">
          <img src={user_image} alt="" />
          <p>{name}</p>
        </div>
        <button type="button" class="btn btn-outline-info">
          Connect <i class="fa-solid fa-plus"></i>
        </button>
      </div>
      <div className="second-div">
        <img src={post_image} alt="" />
      </div>
      <div className="third-div">
        <p>{content}</p>
      </div>
      <div className="fourth-div">
        <i class="fa-regular fa-thumbs-up"></i>
        <i class="fa-regular fa-comment"></i>
        <i class="fa-solid fa-share-nodes"></i>
      </div>
    </div>
  );
}
