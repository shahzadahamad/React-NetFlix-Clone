import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../Constants/constants";
import "./Banner.css";
import axios from "../../axios";

function Banner() {
  const randomNumber = Math.floor(Math.random() * 20);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        setMovie(res.data.results[randomNumber]);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie?.title || movie?.name || ""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
