import React from 'react';
import { Header } from './Components/NavBar/Header';
import './App.css';

// import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';

setBasePath(
  'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0/dist/'
);

// const AppContext = React.createContext(null);

function App() {
  return (
    <>
      <div className="main-header">
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
      </div>

      <div id="app">
        <Header />
      </div>
    </>
  );
}

export default App;
