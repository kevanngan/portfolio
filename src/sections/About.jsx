import React, { useState, useEffect } from 'react';
import { techStackImages, TechStack } from '../components/TechStack';

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
        <article id={`about-section`}>
          <h1>About Me</h1>
          <div className="about-content" dangerouslySetInnerHTML={{ __html: aboutData.content.rendered }}></div>
          <TechStack images={ techStackImages } />
        </article>
      )}
    </>
  );
};

export default About;