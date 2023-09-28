import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data";
import "../Services/services.css";
import Singlepage from "./Singlepage";


const Services = () => {
  const [blogData, setBlogData] = useState(data);

  return (
    <div className="content">
      <div className="flexContainer">
        {blogData.map((post, index) => {
          return (
            <div className="flexItem" key={index}>
              <img
                src={post.thumbnail}
                alt={post.title}
                width="100%"
                title={post.title}
              />
              <h4 className="text-center">{post.title}</h4>
              <div className="authContainer">
                <div className="thumbNail">
                  <img
                    src={
                      "https://res.cloudinary.com/dxrxekidt/image/upload/v1693551879/36037093_348025832391235_3726168602143883264_n_m21yfe.jpg"
                    }
                    alt="..."
                    width="50px"
                  />
                </div>
                <button className="buttonLink">
                  <Link to={`/Singlepage/${post.title}`} className="buttonLink">
                    Read More
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
