import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component { //extends from Component
  state = {
    count: 0
  }; // 내가 바꿀데이터를 state안에 넣는다.
  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };
  render(){
    return (
    <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
}


export default App;
