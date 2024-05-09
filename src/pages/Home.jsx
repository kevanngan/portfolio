import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import About from '../sections/About';
import Footer from '../components/footer/Footer';

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
          <main>
            <Hero restBase={restBase}/>
            <Projects restBase={restBase} />
            <About restBase={restBase} />
          </main>
            <Footer restBase={restBase}/>
        </>
      )}
    </div>
  );
};

export default Home;