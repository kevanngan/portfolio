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
        <article id={`project-section`}>
          <h1>{projectData.title.rendered}</h1>
          <div className="entry-content" dangerouslySetInnerHTML={{ __html: projectData.content.rendered }}></div>
        </article>
      )}
    </>
  );
};

export default Project;