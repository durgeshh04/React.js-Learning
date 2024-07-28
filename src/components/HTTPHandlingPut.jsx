import axios from "axios";
import React, { useState } from "react";

const HTTPHandlingPut = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [responseData, setResponseData] = useState(null);

  const handleUpdate = async (id) => {
    const updatedData = {
      title: "abc",
      body: "Hello sir",
      userId: 1,
    };

    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);
    setResponseData(null);

    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        updatedData
      );
      setSuccessMessage("Successfully Updated");
      setResponseData(response.data);
      console.log(response.data);
    } catch (error) {
      setError("Something went wrong");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <button onClick={() => handleUpdate(1)} disabled={isLoading}>
        {isLoading ? "Updating..." : "Update"}
      </button>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {responseData && <div>{JSON.stringify(responseData)}</div>}
    </div>
  );
};

export default HTTPHandlingPut;