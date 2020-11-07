import React, { useState, useEffect, useCallback } from 'react';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { api, apiKey } from '../../services/api';
import { Container } from './styles';

interface Children {
  match: {
    params: {
      id: string;
    };
  };
}

interface Detail {
  id: number;
  vote_average: number;
  poster_path: string;
  original_title: string;
  overview: string;
  release_date: string;
  title: string;
  revenue: number;
  runtime: number;
  budget: number;
  original_language: string;
  popularity: number;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  status: string;
  videos: {
    results: [
      {
        id: string;
        iso_639_1: string;
        iso_3166_1: string;
        key: string;
        name: string;
        site: string;
        size: number;
        type: string;
      }
    ];
  };
}

const Details = ({ match: { params: id } }: Children) => {
  const [detail, setDetail] = useState<Detail>();

  const onload = useCallback(async () => {
    const response = await api.get(
      `movie/${id.id}?api_key=${apiKey}&language=pt-BR&append_to_response=videos`
    );
    setDetail(response.data);
  }, [id.id]);

  useEffect(() => {
    onload();
  }, [onload]);

  return (
    <Container>
      <div>
        <header className="header">
          <h2>{detail?.title}</h2>
          <p>
            {detail?.release_date &&
              format(parseISO(detail?.release_date), "dd'/'MM'/'yyyy", {
                locale: ptBR,
              })}
          </p>
        </header>
        <section className="content">
          <div className="sinopse">
            <h2>Sinopse</h2>
            <p>{detail?.overview}</p>
          </div>
          <div className="info">
            <h2>Informações</h2>
            <div>
              <div>
                <h3>Situação</h3>
                <p>{detail?.status}</p>
              </div>
              <div>
                <h3>Idioma</h3>
                <p>{detail?.original_language}</p>
              </div>
              <div>
                <h3>Duração</h3>
                <p>{detail?.runtime}min</p>
              </div>
              <div>
                <h3>Orçamento</h3>
                <p>
                  {detail?.budget.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </p>
              </div>
              <div>
                <h3>Receita</h3>
                <p>
                  {detail?.revenue.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </p>
              </div>
              <div>
                <h3>Lucro</h3>
                <p>
                  {detail?.popularity.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </p>
              </div>
            </div>
          </div>
          <footer>
            <div className="genres">
              {detail?.genres.map((g, index) => (
                <article key={index}>
                  <p>{g?.name}</p>
                </article>
              ))}
            </div>
            <div className="vote">
              <div>
                <p>{detail?.vote_average}%</p>
              </div>
            </div>
          </footer>
        </section>
        <aside className="wallpaper">
          <img
            src={`https://image.tmdb.org/t/p/w300${detail?.poster_path}`}
            alt="movie"
          />
        </aside>
      </div>
      {detail?.videos.results.map(v => (
        <iframe
          width="800"
          height="400"
          src={`https://www.youtube.com/embed/${v.key}`}
          title={v.name}
          key={v.key}
        />
      ))}
    </Container>
  );
};

export default Details;
