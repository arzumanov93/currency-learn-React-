import React from 'react';
import './Rate';

class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            currencyRate: {}
        }
        this.currency = ['USD', 'RUB', 'CAD', 'PHP'];
        this.getRate();
    }
    getRate = () => {
        fetch('http://data.fixer.io/api/latest?access_key=966439cca349d9ebc321898263539f55&format=1')
            .then(data => {
                return data.json();
            })
            .then(data => {
                console.log(data);
                this.setState({date: data.date});
                let result = {};
                for (let i = 0; i < this.currency.length; i++) {
                    result[this.currency[i]] = data.rates[this.currency[i]];
                }
                console.log(result); 
                this.setState({currencyRate: result});
            });
    }

    render() {
        return(

        <div className="rate">

            <h3>Курс валют на {this.state.date}</h3>
            <div className="flex-container">
            {Object.keys(this.state.currencyRate).map((keyName, i) => 
                (
                <div className="block flex-item" key={keyName}>
                    <div className="currency-name">{keyName}</div>
                    <div className="currency-in">{this.state.currencyRate[keyName].toFixed(2)}</div>
                    <p>* Можно купить за 1 EUR</p>
                </div>
                )
            )}
            </div>

        </div>
        )
    }
}

export default Rate;