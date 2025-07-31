import React from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
    this.sayHello();
  };

  decrement = () => {
    this.setState(prev => ({ count: prev.count - 1 }));
  };

  sayHello = () => {
    console.log("Hello! This is a static message.");
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  handleClick = (e) => {
    alert("I was clicked");
  };

  render() {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>React Event Examples</h1>

        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>{' '}
        <button onClick={this.decrement}>Decrement</button>

        <div style={{ marginTop: "20px" }}>
          <button onClick={() => this.sayWelcome("Welcome to React Events!")}>
            Say Welcome
          </button>
        </div>

        <div style={{ marginTop: "20px" }}>
          <button onClick={this.handleClick}>
            Synthetic Event (OnPress)
          </button>
        </div>

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
