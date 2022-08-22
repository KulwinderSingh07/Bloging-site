import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [ispending, setIspending] = useState(false);
  const navigator = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIspending(true);
    fetch("http://localhost:4000/blogs", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIspending(false);
      // navigator(-1);
      navigator("/");
    });
  };
  return (
    <div className="create">
      <form onSubmit={handlesubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label>Body</label>
        <input
          type="text"
          value={body}
          required
          onChange={(e) => setBody(e.target.value)}
        ></input>
        <label>Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!ispending && <button>Submit</button>}
        {ispending && <button disabled>Posting...</button>}
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
