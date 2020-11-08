import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, Paginate } from './styles';
import { api, apiKey } from '../../services/api';
import Movie from '../../components/Movie';
import { Creators as CreatorsMessage } from '../../store/ducks/message';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

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

const range = (from: any, to: any, step = 1) => {
  let i = from;
  const rangeData = [];

  while (i <= to) {
    rangeData.push(i);
    i += step;
  }

  return rangeData;
};

const Home = () => {
  const [search, setSearch] = useState('');
  const [genres, setGenres] = useState();
  const [pageNow, setPage] = useState('1');
  const [movies, setMovies] = useState([]);
  const [pageNeighbours] = useState(1);
  const [data, setData] = useState();

  const dispatch = useDispatch();

  const onHandleSubmit = useCallback(async () => {
    try {
      const response = await api.get(
        `search/movie?api_key=${apiKey}&language=pt-BR&query=${search ||
        'a'}&page=${pageNow}`
      );

      const generes = await api.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=pt-BR`
      );

      setData(response.data);
      setGenres(generes.data);
      // eslint-disable-next-line camelcase
      const { results } = response.data;
      const indexOfLastTodo = 5;
      const indexOfFirstTodo = indexOfLastTodo - 5;
      const currentMovies = results.slice(indexOfFirstTodo, indexOfLastTodo);

      setMovies(currentMovies);
    } catch (e) {
      dispatch(
        CreatorsMessage.messageFailure(
          'Error ao consultar a api, Consulte a administração'
        )
      );
    }
  }, [dispatch, pageNow, search]);

  useEffect(() => {
    onHandleSubmit();
  }, [search, pageNow, onHandleSubmit]);

  const fetchPageNumbers = useCallback(() => {
    if (data) {
      // eslint-disable-next-line camelcase
      const { page, total_pages } = data;

      const totalPages = Math.ceil(total_pages / 5);

      const totalNumbers = pageNeighbours * 2 + 3;
      const totalBlocks = totalNumbers + 2;

      if (totalPages > totalBlocks) {
        const startPage = Math.max(2, page - pageNeighbours);
        const endPage = Math.min(totalPages - 1, page + pageNeighbours);
        let pages = range(startPage, endPage);

        const hasLeftSpill = startPage > 2;
        const hasRightSpill = totalPages - endPage > 1;
        const spillOffset = totalNumbers - (pages.length + 1);

        switch (true) {
          // handle: (1) < {5 6} [7] {8 9} (10)
          case hasLeftSpill && !hasRightSpill: {
            const extraPages = range(startPage - spillOffset, startPage - 1);
            pages = [LEFT_PAGE, ...extraPages, ...pages];
            break;
          }

          // handle: (1) {2 3} [4] {5 6} > (10)
          case !hasLeftSpill && hasRightSpill: {
            const extraPages = range(endPage + 1, endPage + spillOffset);
            pages = [...pages, ...extraPages, RIGHT_PAGE];
            break;
          }

          // handle: (1) < {4 5} [6] {7 8} > (10)
          case hasLeftSpill && hasRightSpill:
          default: {
            pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
            break;
          }
        }
        // return [1, ...pages, totalPages];
        return [1, ...pages, totalPages];

        // return range(1, totalPages);
      }
      return range(1, totalPages);
    }
  }, [data, pageNeighbours]);

  function handleInputChange(event: React.FormEvent<HTMLInputElement>): void {
    const { value } = event.currentTarget;
    setSearch(value);
  }

  function setPaginate(n: string) {
    const page = document.getElementById(pageNow);
    // eslint-disable-next-line no-unused-expressions
    page?.classList.remove('active');
    const pageItem = document.getElementById(n);
    // eslint-disable-next-line no-unused-expressions
    pageItem?.classList.add('active');
    setPage(n);
    onHandleSubmit();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const pages = useMemo(() => fetchPageNumbers(), [fetchPageNumbers]);

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
        {pages !== undefined &&
          pages.map((number: string, index: number) => {
            if (number === LEFT_PAGE) return <React.Fragment key={number} />;

            if (number === RIGHT_PAGE) return <React.Fragment key={number} />;

            return (
              <div
                className={`${pageNow == number ? 'active' : ''}`}
                id={number}
                key={number}
                onClick={() => setPaginate(number)}
              >
                <li>{number}</li>
              </div>
            );
          })}
      </Paginate>
    </Container>
  );
};

export default Home;
