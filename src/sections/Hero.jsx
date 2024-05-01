import React, { useState, useEffect } from 'react';

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
          <div className="hero-content" dangerouslySetInnerHTML={{ __html: heroData.content.rendered }}></div>
          <img src="assets/images/character.svg" alt="Character image." />
        </article>
      )}
    </>
  );
};

export default Hero;