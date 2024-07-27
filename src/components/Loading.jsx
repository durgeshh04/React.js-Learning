// Custom  Hook in react.js : which uses component as argument and return new component


import React, { useState, useEffect } from "react";

const Loading = (fetchData) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.log(`Something went wrong${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDataAsync();
  }, [fetchData]);

  return { isLoading, data };
};

export default Loading;
