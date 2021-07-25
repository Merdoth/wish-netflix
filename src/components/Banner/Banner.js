import React, { useState, useEffect } from 'react';

import "./Banner.css";
import axios from "../../utils/axios";
import requests, { img_base_url, truncate } from '../../utils/requests';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]);
      return request;
    }

    fetchData();
  }, [])

  return (
    <header 
      className="banner" 
      style={{
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundImage: `url(${img_base_url}${movie?.backdrop_path})`
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  )
}

export default Banner;
