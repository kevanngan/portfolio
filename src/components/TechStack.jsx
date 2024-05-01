import React from 'react';

const techStackImages = [
  'assets/icons/html-logo.svg',
  'assets/icons/css-logo.svg',
  'assets/icons/javascript-logo.svg',
  'assets/icons/git.png',
  'assets/icons/nodejs.png',
  'assets/icons/php.png',
  'assets/icons/react.png',
  'assets/icons/typescript.png',
  'assets/icons/wordpress.png',
];

const TechStack = ({ images }) => {
  return (
    <div className="tech-stack">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Tech Stack ${index}`} />
      ))}
    </div>
  );
};

export { techStackImages, TechStack };

