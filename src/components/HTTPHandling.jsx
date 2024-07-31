// Handling get request using axios and fetch 

import axios from "axios";
import React, { useState, useEffect } from "react";

const HTTPHandling = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        setPosts(response.data);
        setIsLoading(false);
      })  
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <b>Loading...</b>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <b>Something is wrong...</b>
      </div>
    );
  }

  return (
    <div>
      <h1>List of Posts</h1>
      <ul style={{ listStyleType: "none" }}>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>{" "}
    </div>
  );
};

export default HTTPHandling;



// This is another method to fetch data using fetch 
// Difference between axios and fetch is : fetch needs to convet the data into json file axios don't

// fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setPosts(data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.log(error.message);
//         setError(error.message);
//         setIsLoading(false);
//       });