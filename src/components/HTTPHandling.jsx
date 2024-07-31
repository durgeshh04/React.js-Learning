// Handling get request using axios and fetch 

import axios from "axios";
import React, { useState, useEffect } from "react";

const HTTPHandling = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error.message);
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return <div><b>Loading...</b></div>;
  }

  if (error) {
    return <div><b>Error: {error}</b></div>;
  }

  return (
    <div>
      <h1>List of Posts</h1>
      <ul style={{ listStyleType: "none" }}>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default HTTPHandling;

// This is another method to fetch data using fetch 
// Difference between axios and fetch is: fetch needs to convert the data into json file, axios doesn't

/*
const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    setPosts(data);
    setIsLoading(false);
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    setError(error.message);
    setIsLoading(false);
  }
};
*/