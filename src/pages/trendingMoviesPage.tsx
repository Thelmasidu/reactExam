import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getTrendingMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const TrendingMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrendingMovies().then((movies) => {
      setMovies(movies);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <PageTemplate
          title="Trending Movies"
          movies={movies}
          action={(movie: any) => null}
        />
      )}
    </>
  );
};

export default TrendingMoviesPage;
