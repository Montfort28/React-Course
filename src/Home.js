import { ToastContainer } from "react-toastify";
import BlogList from "./BlogList";
import Pract from "./Pract"
import useFetch from "./useFetch"

const Home = () => {
    const {blogs, isLoading, error} = useFetch("http://localhost:8000/blogs")
      
  return (
    <div className="home">
      {isLoading && <div>Loading...</div>}
      {error && <div>{ error }</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
      <ToastContainer />
      <div>
        <Pract />
      </div>
    </div>
  );
};

export default Home;