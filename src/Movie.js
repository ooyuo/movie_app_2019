import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";


function Movie({id, year, title, summary, poster}) { // 만약 component가 state가 필요없을 경우는 class componenet가 될 필요는 없다. 그래서 일반 function을 써줌
    return (
        <div class="movie">
            <img src={poster} alt={title} title={title} />
            <div class="movie__data">
                <h3 class="movie__title">{title}</h3>
                <h5 class="movie__year">{year}</h5>
                <p class="movie__summary">{summary}</p>
            </div>
        </div>
    );
}

// component type checking
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;