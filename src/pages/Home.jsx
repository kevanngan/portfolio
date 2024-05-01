import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Footer from '../components/Footer';

const Home = ({ restBase }) => {
  const pageId = 7;
  const restPath = `${restBase}pages/${pageId}`;
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const fetchPageData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setPageData(data);
      }
    };

    fetchPageData();
  }, [restPath]);

  return (
    <div className="home-page">
      {pageData && (
        <>
          <Header restBase={restBase}/>
          <Hero restBase={restBase}/>
          <Projects restBase={restBase} />
          <About restBase={restBase} />
          <Footer restBase={restBase}/>
        </>
      )}
    </div>
  );
};

export default Home;