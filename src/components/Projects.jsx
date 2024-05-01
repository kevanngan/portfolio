import React, { useState, useEffect } from 'react';

const Project = ({ restBase }) => {
  const postId = 21;
  const restPath = `${restBase}posts/${postId}`; 
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setProjectData(data);
      }
    };

    fetchProjectData();
  }, [restPath]);

  return (
    <>
      {projectData && (
        <article id={`projects-section`}>
          <h1>My Projects</h1>
          <div className="project-card-1">
            <div className="project-image-container">
              <a href="https://bigboyburgers.bcitwebdeveloper.ca/" target="_blank">
                <img src="" alt="Big Boy Burgers Image" />  
              </a> 
            </div>
            <div className="project-info">
              <h3>Big Boy Burgers</h3>
              <p className="project-description">Explore this collaborative capstone project, an online burger store built with WooCommerce on WordPress.</p>
              <a href="" target="_blank">
                <p>More Details</p>
              </a>
              <a href="https://github.com/htpwebdesign/bigboyburgers-theme" target="_blank">
                <p>Go to GitHub</p>
              </a>
            </div>
          </div>

          <div className="project-card-2">
            <div className="project-image-container">
              <a href="https://kevanngan.com/showboat" target="_blank">
                <img src="" alt="Showboat Image" />  
              </a> 
            </div>
            <div className="project-info">
              <h3>Showboat</h3>
              <p className="project-description">A movie database project built with React.</p>
              <a href="" target="_blank">
                <p>More Details</p>
              </a>
              <a href="https://github.com/hojinchang/showboat" target="_blank">
                <p>Go to GitHub</p>
              </a>
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default Project;