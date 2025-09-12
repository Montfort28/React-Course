import { toast, ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
        fetch("http://localhost:8000/blogs")
       .then(res => {
        if(!res.ok){
            throw Error("Could not fetch the data for that resource");
        }
        return res.json()
       })
       .then(data =>{
        setBlogs(data);
        toast.success("Data fetched successfully!");
        setIsLoading(false);
        setError(null);
       })
       .catch(err => {
        setError(err.message);
        setIsLoading(false);

       })
    }, 1000);
  }, []);

  return (
    <div className="home">
      { isLoading && <div>Loading...</div>}
      {error && <div>{ error }</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
      <ToastContainer />
    </div>
  );
};

export default Home;
