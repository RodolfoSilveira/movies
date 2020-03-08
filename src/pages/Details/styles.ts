import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  max-width: 700px;
  height: 100%;
  margin: 50px auto;

  > div {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 500px 1fr;
    grid-template-rows: 60px 1fr;
    grid-template-areas: "header header" "content wallpaper ";

    header.header {
      grid-area: header;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #ebebeb;
      padding: 20px;

      h2 {
        color: #116193;
        font-size: 1.6rem;
        font-weight: 200;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 400px;
        overflow: hidden;
      }

      p {
        color: ${darken(0.08, '#bdbdbd')};
        font-size: 16px;
      }
    }

    section.content {
      grid-area: content;
      padding: 20px;
      height: auto;
      background: ${lighten(0.05, '#ebebeb')};
      display: flex;
      flex-direction: column;

      .sinopse {
        margin-bottom: 20px;
        h2 {
          color: #116193;
          font-size: 1.2rem;
          font-weight: 200;
        }

        h2::after {
          content: '';
          display: block;
          border: 1px solid #00e8e4;
          margin: 5px 0;
        }

        p {
          width: 100%;
          line-height: 1.3;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }

      .info {
        h2 {
          color: #116193;
          font-size: 1.2rem;
          font-weight: 200;
        }

        h2::after {
          content: '';
          display: block;
          border: 1px solid #00e8e4;
          margin: 5px 0;
        }

        div {
          display: flex;

          > div {
            display: flex;
            flex-direction: column;
            margin-right: 20px;

            h3 {
              color: #116193;
              font-size: 1rem;
              font-weight: 200;
              text-align: center;
            }

            p {
              font-size: 12px;
            }
          }
        }
      }

      footer {
        display: flex;
        justify-content: space-between;
        margin-top: auto;

        .genres {
          display: flex;
          flex-direction: row;
          align-items: center;

          > article {
            margin: 5px;
            padding: 5px 10px;
            background-color: #FFF;
            border: 1px solid #116193;
            border-radius: 18px;
            color: #116193;

            p {
              font-size: 10px;
            }
          }
        }

        .vote {
          width: 80px;
          height: 80px;
          background: ${lighten(0.04, '#116193')};
          display: flex;
          align-items: center;
          justify-content: center;
          border: 5px solid #00e8e4;
          border-radius: 50%;
          p {
            font-size: 20px;
            color: #00e8e4;
          }
        }
      }
    }

    aside.wallpaper {
      grid-area: wallpaper;
      display: flex;
    }
  }
  iframe {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;
