import React, { useState } from "react";
import axios from "axios";
import "./HTTPHandlingPost.css";

const HTTPHandlingPost = () => {
  const [formData, setFormData] = useState({
    userId: "",
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData
      );
      console.log(response)
    } catch (error) {
        console.log("Issue in fetching data", error)
    }
  };

  return (
    <div className="http-handling-post">
      <form className="post-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="label" htmlFor="userId">
            UserId:
          </label>
          <input
            className="input-tag"
            type="text"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label className="label" htmlFor="title">
            Title:
          </label>
          <input
            className="input-tag"
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label className="label" htmlFor="body">
            Body:
          </label>
          <input
            className="input-tag"
            type="text"
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
          />
        </div>
        <div className="input-group button-group">
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default HTTPHandlingPost;

// Fetching data in React.js with the help of fetch

// try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
