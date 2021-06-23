import React from 'react';
import './Calc';

class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    
    render() {
        return(
            <div className="calculator">
                <h3>Калькулятор обмена</h3>

                <div className="block">
                    <div>Я хочу</div>

                    <div>
                        <form onSubmit={this.calcRate}>
                            <input type="number" defaultValue="150"/>
                            <select name="" id="">               
                                {Object.keys(this.props.rate).map((keyName, i) => 
                                (
                                <option key={keyName} value={keyName}>{keyName}</option>
                                )
                                )}
                            </select>
                            <input type="submit" defaultValue="calc"/>
                        </form>
                    </div>

                    <div>
                        <h4>Результат</h4>
                        <ul className="calc-res">
                            <li>EUR 150</li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}

export default Calc;