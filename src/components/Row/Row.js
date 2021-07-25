import React, { useState, useEffect } from 'react';
import YouTube from "react-youtube";

import "./Row.css";
import axios from "../../utils/axios";
import { API_KEY, img_base_url } from "../../utils/requests";

function Row({ title, fetchUrl, isLargeRow }) {
  const [ movies, setMovies ] = useState([]);
  const [ trailerUrl, setTrailerUrl ] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let movieTrailer = await axios.get(
        `/movie/${movie.id}/videos?api_key=${API_KEY}`
      );
      console.log(movieTrailer, "fammmii")
      setTrailerUrl(movieTrailer.data.results[0]?.key)
    }
  }

  const opts = {
    height: "450",
    width: "100%",
    playerVars: {
      autoplay: 1,
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map(movie => (
          <img 
            key={movie.id} 
            alt={movie.name} 
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${img_base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
          />
        ))}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row;
