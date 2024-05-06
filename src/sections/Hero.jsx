import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Hero = ({ restBase }) => {
  const postId = 19;
  const restPath = `${restBase}posts/${postId}`; 
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setHeroData(data);
      }
    };

    fetchHeroData();
  }, [restPath]);

  return (
    <>
      {heroData && (
        <article id={`hero-section`}>
          <div className="hero-content">
            <div dangerouslySetInnerHTML={{ __html: heroData.content.rendered }}></div>
            <button><ScrollLink to="projects-section" smooth={true} duration={500}>View My Projects ↴</ScrollLink></button>
          </div>
          <img src="assets/images/character.svg" alt="Character image." />
        </article>
      )}
    </>
  );
};

export default Hero;