import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
          <h1>{projectData.title.rendered}</h1>
          
          <div className="project-card-1">
            <div className="project-image-container">
              <a href="https://bigboyburgers.bcitwebdeveloper.ca/" target="_blank">
                <img src="assets/images/bbb.png" alt="Big Boy Burgers Image" />  
              </a> 
            </div>
            <div className="project-info project-info-1">
              <h3>Big Boy Burgers</h3>
              <p className="project-description">Explore our group capstone project, an online burger store built with WooCommerce on WordPress.</p>
              <Link to="/bigboyburgers">
                <p>More Details</p>
              </Link>
              <a href="https://github.com/htpwebdesign/bigboyburgers-theme" target="_blank">
                <p>View GitHub</p>
              </a>
            </div>
          </div>

          <div className="project-card-2">
            <div className="project-image-container">
              <a href="https://kevanngan.com/showboat" target="_blank">
                <img src="assets/images/showboat.png" alt="Showboat Image" />  
              </a> 
            </div>
            <div className="project-info project-info-2">
              <h3>Showboat</h3>
              <p className="project-description">A movie database project built with React.</p>
              <Link to="/showboat">
                <p>More Details</p>
              </Link>
              <a href="https://github.com/kevanngan/showboat" target="_blank">
                <p>View GitHub</p>
              </a>
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default Project;