import React from 'react';
import axios from "axios";
import Movie from "./Movie";

/*
App에 들어있는 것
1. state
2. getMovies() - data를 가져옴
3. componentDidMount - component가 mount됐을때 호출
4. render() 
*/
class App extends React.Component { //extends from Component
  state = {
    isLoading: true, //mount되자마자 isLoading은 true
    movies: []
  };
  getMovies = async () => { // 이 함수가 비동기라고 한것이고 = "너는 이걸 기다려야 해"라는 말임
    const { data:{ data:{ movies }}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); // axios가 끝날 때까지 기다렸다가 계속해.
    this.setState({movies, isLoading: false}) // = this.setState({movies: movies}) 왼쪽: state의 movies, 오른쪽: axios의 movies
  }
  componentDidMount() { // component가 mount됐을때 호출
    this.getMovies();
  } /* componentDidMount()에서 data를 fetch한다.
  그리고 api로부터 fetch가 완료되면 "we are ready"대신 
   1. movie를 render하고 2. map을 만들고 3. movie를 render하는 것 */
  render(){
   const { isLoading, movies } = this.state;
    return (
      <div> 
        {isLoading 
          ? "Loading..." 
          : movies.map(movie => (
            <Movie 
              key={movie.id} 
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}/> // Loding이 다 됐을경우 Movie컴포넌트를 return 한다.
          ))}
        </div>
      )
    }
  }
export default App;
