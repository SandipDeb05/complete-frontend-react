import React, { useEffect } from "react";
import axiosInstance from "../axios";

const Posts = () => {
  useEffect(() => {
    async function fetchPosts() {
      const response = await axiosInstance.get("/posts");
      console.log("post", response.data);
    }
    fetchPosts();
  });
  useEffect(() => {
    async function fetchUsers() {
      const response = await axiosInstance.get("/users");
      console.log("users", response.data);
    }
    fetchUsers();
  });
  return <div>Posts</div>;
};

export default Posts;
