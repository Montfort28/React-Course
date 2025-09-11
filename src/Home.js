import { toast, ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
       .then(res => {
        return res.json()
       })
       .then(data =>{
        setBlogs(data);
        toast.success("data fetched succesfully")
       })
  }, []);

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
      <ToastContainer />
    </div>
  );
};

export default Home;
