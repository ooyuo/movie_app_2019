import React from 'react';

class App extends React.Component { //extends from Component
  // component life cycle 1.
  constructor(props) {
    super(props);
    console.log("hello");
  }
  state = {
    count: 0
  }; // 내가 바꿀데이터를 state안에 넣는다.

  add = () => {
    // this.state.count = 1;
    this.setState(current => ({count: current.count + 1}));
  };

  minus = () => {
    // this.state.count = -1; //render function을 refresh시키지않는 방법, 이 방법을 사용하면 state에 의존하게된다. 비추.
    this.setState(current => ({count: current.count - 1})); // state를 set할때 react에서 외부의 상태에 의존하지않는 가장좋은방법
  };

  // component life cycle 3.
  componentDidMount(){
    console.log("component rendered");
  }
  
  componentDidUpdate(){
    console.log("i just updated"); // setState를 호출했기때문에, render function호출> console.log받음
  }

  componentWillUnmount(){
    // component가 떠날때(페이지 이동, 창 새로고침)할떄 호출됨
  }

  render(){
    // component life cycle 2.
    console.log("im rendering");
    return (
    <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
}
/*
매 순간 너가 set State를 호출할때마다 react는 새로운 state와 함께 render function을 호출
setState를 할떄마다 react는 new render한다.

*/

export default App;
