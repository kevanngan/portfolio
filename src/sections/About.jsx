import React, { useState, useEffect } from 'react';
import { techStackImages, TechStack } from '../components/TechStack';
import Dropdown from '../components/Dropdown';

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
          <div className="about-content">
            <h1>{aboutData.title.rendered}</h1>
            <p>{aboutData.acf.intro_1}</p>
            <p>{aboutData.acf.intro_2}</p>
            <div className="faq">
              <Dropdown 
                question="What's your favourite genres of music?"
                answer="I enjoy Future Bass and Melodic dubstep, J-Pop and C-Pop."
              />
              <Dropdown 
                question="What are your favourite games?"
                answer="League of Legends, Teamfight Tactics, and Valorant."
              />
              <Dropdown 
                question="What hobby do you want to get into?"
                answer="I'm looking to get into gardening, I find the thought of just working on a small vegetable garden relaxing and satisfying when the vegetable or fruits are ripen. (Assuming everything goes well!)"
              />
            </div>
          </div>
          <div className="stack-tools">
            <h2>Stack and Tools</h2>
            <TechStack images={ techStackImages } />
          </div>
        </article>
      )}
    </>
  );
};

export default About;