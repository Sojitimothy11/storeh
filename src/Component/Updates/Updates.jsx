import React from 'react'
import "../Updates/Updates.css"


function Updates() {
  const objects = [
    {
      id: 1,
      name: "API DOCUMENTATION",
      downloadLink: "https://storeharmony.com/apidoc",
    },
    {
      id: 2,
      name: "STORE HARMONY LATEST UPDATE FILE",
      downloadLink: "https://storeharmony.com/download/Patch_lib_3.06036.zip",
    },
    {
      id: 3,
      name: "GOTO YOUR CLOUD",
      downloadLink: "https://storeharmony.com/web/LoginUser",
    },
  ];

  return (
    <div className="container">
      <h1>OUR LATEST UPDATES</h1>
      <div className="object-list">
        {objects.map((object) => (
          <div className="object" key={object.id}>
            <h2>{object.name}</h2>
            <button>
              <a href={object.downloadLink} download>
                Download
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}



export default Updates

