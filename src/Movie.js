import React from "react";
import PropTypes from "prop-types";


function Movie({id, year, title, summary, poster}) { // 만약 componen가 state가 필요없을 경우는 class componenet가 될 필요는 없다. 그래서 일반 function을 써줌
    return <h5>{title}</h5>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;