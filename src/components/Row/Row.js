import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../Axios";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const base_url = "https://image.tmdb.org/t/p/original/";
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    console.log("movies", movies);
    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map(movie => (
                    <img
                    className="row__poster"
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                            }`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;