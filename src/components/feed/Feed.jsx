import React, { useState } from "react";
import "./Feed.css";
import Post from "../Post/Post";

const Feed = () => {
  const initialPosts = [
    {
      id: 1,
      name: "Eleanor Pena",
      image: "https://via.placeholder.com/40",
      postImage: "src/assets/image/Img1.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur. Faucibus amet porttitor pulvinar enim.",
      likes: 0,
      comments: 0,
      shares: 0,
    },
    {
      id: 2,
      name: "Eleanor Pena",
      image: "https://via.placeholder.com/40",
      postImage: "src/assets/image/Img2.jpg",
      content:
        "Some example code snippet in the post with lorem ipsum text here.",
      likes: 0,
      comments: 0,
      shares: 0,
    },
  ];

  const [posts, setPosts] = useState(initialPosts);

  const incrementLikes = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  const incrementComments = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, comments: post.comments + 1 } : post
    );
    setPosts(updatedPosts);
  };

  const incrementShares = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, shares: post.shares + 1 } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div className="feed-container">
      {posts.map((post) => (
        <Post key = {post.id} name = {post.name} user_image = {post.image} post_image = {post.postImage} content = {post.content} likes = {post.like} comments = {post.comments} shares = {post.shares} />
      ))}
    </div>
  );
};

export default Feed;
