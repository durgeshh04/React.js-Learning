// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const FetchingData = () => {
//   const [posts, setPosts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/posts`)
//       .then((response) => {
//         console.log(response);
//         setPosts(response.data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.log("Something went wrong", error);
//         setError(`${error}`);
//         setIsLoading(false);
//       });
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <ul style={{ listStyleType: "none" }}>
//         {posts.map((post) => (
//           <li key={post.id}>{post.body}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FetchingData;

// Fetching data of single post:

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const FetchingData = () => {
//   const [post, setPost] = useState({});
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [id, setId] = useState('');

//   useEffect(() => {
//     if (id) {
//       setIsLoading(true);
//       setError(null);
//       axios
//         .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//         .then((response) => {
//           console.log(response);
//           setPost(response.data);
//           setIsLoading(false);
//         })
//         .catch((error) => {
//           console.log(error);
//           setError(error.message);
//           setIsLoading(false);
//         });
//     } else {
//       setPost({});
//       setIsLoading(false);
//       setError(null);
//     }
//   }, [id]);

//   return (
//     <div>
//       <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
//       {isLoading && <div>Loading...</div>}
//       {!isLoading && (
//         <ul>
//           {post.title && <h1>{post.title}</h1>}
//           {post.body && <p>{post.body}</p>}
//           {error && <div>{error}</div>}
//           {!post.title && !post.body && !error && <div>No post found</div>}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default FetchingData;

// Fetching single post data on button click

import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchingData = () => {
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [id, setId] = useState("");
  const [fromButtonClick, setFromButtonClick] = useState("");

  const handleClick = () => {
    setFromButtonClick(id);
  };

  useEffect(() => {
    if (fromButtonClick) {
      setIsLoading(true);
      setError(null);
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${fromButtonClick}`)
        .then((response) => {
          setPost(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError("An error occurred. Please try again.");
          setIsLoading(false);
        });
    }
  }, [fromButtonClick]);

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleClick}>Fetch Data</button>
      {isLoading && <div>Loading...</div>}
      {!isLoading && !error && post.title && (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )}
      {!isLoading && error && <div>{error}</div>}
      {!isLoading && !post.title && !error && (
        <div>No post found</div>
      )}
    </div>
  );
};

export default FetchingData;
