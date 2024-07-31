import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchingData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response);
      setPosts(response.data);
    });
  }, []);

  return (
    <div>
      {posts.map((post) => {
        <li key={post.id}>{post.title}</li>;
      })}
    </div>
  );
};

export default FetchingData;
