import React, { useState, useEffect, useCallback } from 'react';
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

const Home: React.FC = () => {
  const [search, setSearch] = useState('');
  const [genres, setGenres] = useState();
  const [pageNow, setPage] = useState('1');
  const [movies, setMovies] = useState([]);
  const [totalPage, setTotalPage] = useState();

  const onHandleSubmit = useCallback(async () => {
    try {
      const response = await api.get(
        `search/movie?api_key=${apiKey}&language=pt-BR&query=${search ||
        'a'}&page=${pageNow}`
      );

      const generes = await api.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=pt-BR`
      );

      setGenres(generes.data);
      const { page, results } = response.data;

      const indexOfLastTodo = page * 5;
      const indexOfFirstTodo = indexOfLastTodo - 5;
      const currentTodos = results.slice(indexOfFirstTodo, indexOfLastTodo);

      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(results.length / 5); i++) {
        pageNumbers.push(i);
      }

      setTotalPage(pageNumbers);
      setMovies(currentTodos);
    } catch (e) { }
  }, [pageNow, search]);

  useEffect(() => {
    onHandleSubmit();
  }, [search, pageNow, onHandleSubmit]);

  function handleInputChange(event: React.FormEvent<HTMLInputElement>): void {
    const { value } = event.currentTarget;
    setSearch(value);
  }

  function setPaginate(n: string) {
    const page = document.getElementById(pageNow);
    page?.classList.remove('active');
    const pageItem = document.getElementById(n);
    pageItem?.classList.add('active');
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
        {totalPage !== undefined &&
          totalPage.map((number: string, index: number) => (
            <div key={number} id={number}>
              <li onClick={() => setPaginate(number)}>{number}</li>
            </div>
          ))}
      </Paginate>
    </Container>
  );
};

export default Home;
