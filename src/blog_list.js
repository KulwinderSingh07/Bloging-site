import { Link } from "react-router-dom";

const bloglist = ({ blogs, title }) => {
  return (
    <div className="bloglist">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
          </Link>
          <p>written by {blog.author}</p>
          {/* <button onClick={() => deletionofblogs(blog.id)}>Delete</button> */}
        </div>
      ))}
    </div>
  );
};

export default bloglist;
