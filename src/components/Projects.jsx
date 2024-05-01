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
        </article>
      )}
    </>
  );
};

export default Project;