import React from 'react';

import Header from '../components/Header';
import Landing from '../components/landing';
import Mission from '../components/Mission';
import Care from '../components/Care';
import Footer from '../components/Footer';

const Home = () => {

    return (
      <div className="parent-container">
        <Header />
        <Landing />
        <Mission />
        <Care />
        <Footer />
      </div>
    )
}
  
export default Home