import React from 'react';
import Header from '../components/Header/Header';
import HeroSlider from '../components/Hero/HeroSlider';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <main>
        <HeroSlider />
      </main>
    </div>
  );
};

export default Home;