import React, { useEffect, useState } from "react";
import Youtube from "react-youtube";
import "./RowPost.css";
import axios from "../../axios";
import { imageUrl, API_KEY } from "../../Constants/constants";

function RowPost({ title, isSmall, url }) {
  const [movie, setMovie] = useState([]);
  const [urlId, setUrlId] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setMovie(res.data.results);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language-en-US`)
      .then((res) => {
        if (res.data.results.length !== 0) {
          setUrlId(res.data.results[0]);
        } else {
            console.log('Emtpy!')
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="posters">
        {movie.map((movie) => (
          <img
            onClick={() => handleMovie(movie.id)}
            className={isSmall ? "smallPoster" : "poster"}
            alt="poster"
            src={`${imageUrl + movie.backdrop_path}`}
          />
        ))}
      </div>
      { urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default RowPost;
