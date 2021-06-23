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

            <h3>Калькулятор обмена</h3>

            <div className="block">
              <div>Я хочу</div>
              <div><label><input type="radio" name="radio" defaultValue="0"/>купить</label></div>
              <div><label><input type="radio" name="radio" defaultValue="1"/>продать</label></div>

              <div>
                <input type="number" defaultValue="150"/>
                <select name="" id="">
                  <option value="USD">USD</option>
                  <option value="RUB">RUB</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>

              <div>
                <h4>Результат</h4>
                <ul className="calc-res">
                  <li>EUR 150</li>
                  <li>EUR 150</li>
                  <li>EUR 150</li>
                  <li>EUR 150</li>
                </ul>
              </div>

            </div>

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
