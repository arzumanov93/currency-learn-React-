import React from 'react';
import './App.css';

import Header from './header/Header';
import Footer from './footer/Footer';
import Rate from './rate/Rate';


class App extends React.Component {
  render() {
    return (
      <div className="site">
        
        <Header/>

        <div className="container">
          <main>
            <Rate/>

            

          </main>
        </div>

        <div className="container" id="cookie-info">
          <div className="site-content">
            <div className="well">На нашем сайте мы используем cookie для сбора информации технического характера. <br/> В частности, для перосифицированной работы сайта мы обрабатываем IP-адрес региона вашего местоположения. <button className="btn btn-primary btn-sm">OK</button> </div>
          </div>
        </div>

        <Footer/>

      </div>
    );
  }
}

export default App;
