import React, { useState, useEffect } from 'react';

const About = ({ restBase }) => {
  const postId = 16;
  const restPath = `${restBase}posts/${postId}`; 
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setAboutData(data);
      }
    };

    fetchAboutData();
  }, [restPath]);

  return (
    <>
      {aboutData && (
        <article id={`post-${aboutData.id}`}>
          <h1>{aboutData.title.rendered}</h1>
          <div className="entry-content" dangerouslySetInnerHTML={{ __html: aboutData.content.rendered }}></div>
        </article>
      )}
    </>
  );
};

export default About;