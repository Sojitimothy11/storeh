import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data";
import "../Services/singlepage.css"; // Import your CSS file for styling (replace 'Singlepage.css' with your actual CSS file)

const Singlepage = () => {
  const { title } = useParams();
  console.log(title);
  const post = data.find((blog) => blog.title === title);

  if (!post) {
    // Handle the case when the post with the given title is not found
    return (
      <div className="container">
        <p>Post not found</p>
        <button>
          <Link to="/Services">Go Back</Link>
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <button className="close-button">
        <Link to="/Services">Go Back</Link>
      </button>
      <div className="thumbnail">
        <img src={post.thumbnail} alt={post.title} />
      </div>
      <div className="post">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default Singlepage;
