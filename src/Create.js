import { useState } from "react";
import { useNavigate} from 'react-router-dom'

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const blog = { title, body, author };

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("blog added successfully");
      setIsLoading(false);
      navigate('/')
    });
  };

  return (
    <div className="NewBlog">
      <h1>Add a New Blog</h1>
      <form onSubmit={handleSubmit}>
        <label>Blog title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
          <option value="mont">mont</option>
        </select>
        {!isLoading && <button>ADD BLOG</button>}
        {isLoading && <button disabled>ADDING BLOG.....</button>}
      </form>
    </div>
  );
};

export default Create;
