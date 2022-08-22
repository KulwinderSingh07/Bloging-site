import { useState, useEffect } from "react";
import BlogLists from "./blog_list";
import fetch from "./fetch";
const Home = () => {
  //const [blogs, setBlogs] = useState(null);
  // const [name, setName] = useState("Kulwinder");
  //const [isloading, setisloading] = useState(true);
  // const deletionofblogs = (id) => {
  //   const new_blog = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(new_blog);
  // };
  const {
    data: blogs,
    isloading,
    error,
  } = fetch("http://localhost:4000/blogs");
  return (
    <div className="home">
      {isloading && <div>Loading...</div>}
      {blogs && (
        <BlogLists
          blogs={blogs}
          title={"All the Blogs!"}
          // deletionofblogs={deletionofblogs}
        />
      )}
      {/* <button onClick={() => setName("Aulakh")}>Channge the Name</button> */}
      {/* <p>{name}</p> */}
    </div>
  );
};

export default Home;
