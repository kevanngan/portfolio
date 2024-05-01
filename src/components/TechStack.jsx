// TechStack.jsx
import React from 'react';

const techStackImages = [
  'assets/icons/html-logo.svg',
  'assets/icons/css-logo.svg',
  'assets/icons/javascript-logo.svg',
  'assets/icons/git.png',
  'assets/icons/nodejs.png',
  'assets/icons/php.png',
  'assets/icons/sass.png',
  'assets/icons/react.png',
  'assets/icons/typescript.png',
  'assets/icons/wordpress.png',
];

const TechStack = () => {
  // Slice the images array into three groups
  const firstGroup = techStackImages.slice(0, 3);
  const secondGroup = techStackImages.slice(3, 7);
  const thirdGroup = techStackImages.slice(7);

  return (
    <div className="tech-stack-wrapper">

      <div className="stack-column-1">
        {firstGroup.map((image, index) => (
          <div key={index} className="tech-stack-item">
            <img src={image} alt={`Tech Stack ${index}`} />
          </div>
        ))}
      </div>

      <div className="stack-column-2">
        {secondGroup.map((image, index) => (
          <div key={index} className="tech-stack-item">
            <img src={image} alt={`Tech Stack ${index + 3}`} />
          </div>
        ))}
      </div>

      <div className="stack-column-3">
        {thirdGroup.map((image, index) => (
          <div key={index} className="tech-stack-item">
            <img src={image} alt={`Tech Stack ${index + 7}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { techStackImages, TechStack };