import axios from "axios";
import React, { useState } from "react";

const HTTPHandlingDelete = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleDelete = async (id) => {
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setSuccessMessage(`Successfully deleted post with ID: ${id}`);
      console.log(`Deleted data:`, response.data);
    } catch (error) {
      setError("An error occurred while deleting the post. Please try again.");
      console.error("Problem in data deletion:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button onClick={() => handleDelete(1)} disabled={isLoading}>
        {isLoading ? "Deleting..." : "Delete"}
      </button>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default HTTPHandlingDelete;
