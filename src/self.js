import React from 'react';
import Movie from './Movie';
import axios from "axios";

class App extends React.Component {
    state = {
        isLoading: false,
        movies: []
    };
    getMovies = async () => {
        const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        this.state = {
            isLoading: true,
            movies
        }
    }
    
}

export default App;