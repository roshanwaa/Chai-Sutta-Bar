import React, { useState, useEffect } from 'react';

const Head = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`main-header ${isSticky ? 'sticky' : ''}`}>
      <img
        src="https://www.chaisuttabarindia.com/wp-content/uploads/2022/04/Chai-Sutta-Bar2.png"
        alt="CSB"
        className="csb-logo"
      />
      <br />
      <h1 className="main__title">
        <span className="c-font">C</span>HAI
        <span className="c-font"> S</span>UTTA
        <span className="b-font"> BAR </span>
      </h1>

      <p className="branch-csb"> Rajendranagar Patna</p>
    </header>
  );
};

export default Head;
