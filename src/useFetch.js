import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    }, 1000);
  }, [url]);

  return {blogs, isLoading, error};
};

export default useFetch;