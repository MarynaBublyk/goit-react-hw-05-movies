import { getTrendingMovies } from 'services/getMovies';
import { useEffect, useState } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      <MoviesList movies={movies} />
    </>
  );
};
