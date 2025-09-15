import { useParams } from 'react-router-dom'
import useFetch from'./useFetch'

const BlogDetails = () =>{
    const { id } = useParams()
    const {blogs: blog, isLoading, error} = useFetch('http://localhost:8000/blogs/' + id)

    return (
        <div className="blog-details">
            {isLoading && <div>Loading.....</div>}
            {error && <div>{ error }</div>}
            {blog && (
                <article>
                    <h1>{blog.title}</h1>
                    <p>written by { blog.author }</p>
                    <div>{blog.body}</div>
                </article>
            )}
        </div>
    )
}

export default BlogDetails