import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController()

    setTimeout(() => {
      fetch(url, {signal: abortCont.signal})
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
          if (err.name === 'AbortError'){
            console.log('fetch aborted')
          }
          else{
          setError(err.message);
          setIsLoading(false);
          }
          
        });
    }, 1000);

    return ()=> abortCont.abort()
  }, [url]);

  return {blogs, isLoading, error};
};

export default useFetch;