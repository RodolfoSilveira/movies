import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Paginate } from './styles';
import { api, apiKey } from '../../services/api';
import Movie from '../../components/Movie';

interface MovieDetails {
  id: number;
  vote_average: number;
  poster_path: string;
  title: string;
  original_title: string;
  overview: string;
  release_date: string;
  genre_ids: [];
}

type genres = [{
  id: number
}]


const Home: React.FC = () => {
  const [search, setSearch] = useState('');
  const [genres, setGenres] = useState();
  const [page, setPage] = useState('');
  const [movies, setMovies] = useState([]);
  const [totalPage, setTotalPage] = useState();

  async function onHandleSubmit() {
    try {
      const response = await api.get(
        `search/movie?api_key=${apiKey}&language=pt-BR&query=${search}&page=${page}`
      );

      const generes = await api.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=pt-BR`
      );

      setGenres(generes.data);
      const { total_pages, total_results, results } = response.data;

      let totalPages = total_results / 5;
      console.log(response.data);
      setTotalPage(total_pages);
      setMovies(results);
    } catch (e) {
      // throw new Error('Não foi possivel obter dados');
    }
  }

  useEffect(() => {
    onHandleSubmit();
  }, [search]);

  function handleInputChange(event: React.FormEvent<HTMLInputElement>): void {
    const { value } = event.currentTarget;
    setSearch(value);
  }

  function setPaginate(n: string) {
    setPage(n);
    onHandleSubmit();
  }

  return (
    <Container>
      <div className="search-box">
        <input
          type="text"
          name="search"
          value={search}
          onChange={event => handleInputChange(event)}
          placeholder="Busque um filme por nome, ano ou gênero..."
        />
      </div>
      {movies.map((movie: MovieDetails, index) => (
        <Link to={`/details/${encodeURIComponent(movie.id)}`} key={index}>
          <Movie data={movie} genres={genres} />
        </Link>
      ))}

      <Paginate>
        <button onClick={() => setPaginate('1')}>1</button>
        <button onClick={() => setPaginate('2')}>2</button>
        <button onClick={() => setPaginate('3')}>3</button>
        <button onClick={() => setPaginate('4')}>4</button>
        <button onClick={() => setPaginate('5')}>5</button>
      </Paginate>
    </Container>
  );
};

export default Home;
