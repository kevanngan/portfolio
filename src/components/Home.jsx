import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import About from './About';
import Footer from './Footer';

const Home = ({ restBase }) => {
  const pageId = 7;
  const restPath = `${restBase}pages/${pageId}`;

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch(restPath);
        if (response.ok) {
          const data = await response.json();
          setPageData(data);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching page data:', error);
      }
    };

    fetchPageData();
  }, [restPath]);

  return (
    <div className="home-page">
      <Header />
      <Hero />
      <Projects restBase={restBase} />
      <About restBase={restBase} />
      <Footer />
    </div>
  );
};

export default Home;