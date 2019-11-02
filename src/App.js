import React from 'react';

class App extends React.Component { //extends from Component
  state = {
    isLoading: true, //mount되자마자 isLoading은 true
    movies: []
  };
  componentDidMount() { // component가 mount됐을때 호출
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 6000);
  } /* componentDidMount()에서 data를 fetch한다.
  그리고 api로부터 fetch가 완료되면 "we are ready"대신 
   1. movie를 render하고 2. map을 만들고 3. movie를 render하는 것 */
  render(){
   const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "we are ready"}</div>
  }
}

export default App;
