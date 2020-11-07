import React, { useState, useEffect, useCallback } from 'react';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { MovieBox } from './styles';

interface Children {
  data: {
    id: number;
    vote_average: number;
    poster_path: string;
    original_title: string;
    overview: string;
    title: string;
    release_date: string;
    genre_ids: number[];
  };
  genres: {
    genres: [
      {
        id: number;
        name: string;
      }
    ];
  };
}

const Movie: React.FC<Children> = ({ data, genres }) => {
  const [cat, setCat] = useState<string[]>([]);

  const catagory = useCallback(() => {
    const names: string[] = [];
    data?.genre_ids.map(ge => {
      genres.genres.length > 0 &&
        genres.genres.map(g => {
          if (ge === g.id) {
            names.push(g.name);
          }
        });
    });

    setCat(names);
    // eslint-disable-next-line react/prop-types
  }, [data, genres.genres]);

  useEffect(() => {
    catagory();
  }, [catagory]);

  return (
    <MovieBox>
      <div className="wallpaper">
        <img
          src={`https://image.tmdb.org/t/p/w300${data?.poster_path}`}
          alt="movie"
        />
      </div>
      <div className="header">
        <header>
          <h2>{data?.title}</h2>
        </header>
      </div>
      <div className="content">
        <div>
          <div>
            <p>{data?.vote_average}%</p>
          </div>
        </div>
        <span>
          {data?.release_date &&
            format(parseISO(data?.release_date), "dd'/'MM'/'yyyy", {
              locale: ptBR,
            })}
        </span>
        <section>
          <p>{data?.overview}</p>
          <div>
            {cat.length > 0 &&
              cat.map((g: string, index: number) => (
                <article key={index}>
                  <p>{g}</p>
                </article>
              ))}
          </div>
        </section>
      </div>
    </MovieBox>
  );
};

export default Movie;
