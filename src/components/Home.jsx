import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import About from './About';
import Footer from './Footer';

const Home = ({ restBase }) => {
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