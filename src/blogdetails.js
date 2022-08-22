import { useParams } from "react-router-dom";
import useFetch from "./fetch";
import { useNavigate } from "react-router-dom";
const BlogDetails = () => {
  const { id } = useParams();
  const navigator = useNavigate();
  const {
    data: blog,
    isloading,
    error,
  } = useFetch("http://localhost:4000/blogs/" + id);
  const dletionofblog = () => {
    fetch("http://localhost:4000/blogs/" + blog.id, {
      method: "Delete",
    }).then(() => {
      navigator("/");
    });
  };
  return (
    <div className="blog-details">
      {isloading && <div>Loading..</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <p>{blog.body}</p>
          <button onClick={dletionofblog}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
