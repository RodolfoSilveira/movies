import styled from 'styled-components';
import { darken, lighten } from 'polished';
import media from 'styled-media-query';

export const Container = styled.div`
  max-width: 800px;
  height: 100%;
  margin: 50px auto;

  ${media.lessThan('medium')`
    max-width: 300px;
  `}

  > div {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 500px 1fr;
    grid-template-rows: 60px 1fr;
    grid-template-areas: 'header header' 'content wallpaper ';
    margin: 0 auto;

    ${media.lessThan('medium')`
      grid-template-columns: 300px;
      grid-template-rows: 60px 1fr 1fr;
      grid-template-areas: "header" "content" "wallpaper";
      margin-bottom: 10px;
    `}

    header.header {
      grid-area: header;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #ebebeb;
      padding: 20px;
      flex-shrink: 3;

      h2 {
        color: #116193;
        font-size: 1.6rem;
        font-weight: 200;
        text-overflow: ellipsis;
        width: 400px;
        overflow: hidden;
        ${media.lessThan('medium')`
          font-size: 1rem;
          width: 350px;
          height: 35px;
        `}
        ${media.greaterThan('medium')`
          white-space: nowrap;
        `}
      }

      p {
        color: ${darken(0.08, '#bdbdbd')};
        font-size: 16px;
        ${media.lessThan('medium')`
          font-size: 13px;
        `}
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
          margin-top: 20px;
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
          flex-shrink: 3;
          flex-wrap: wrap;
          ${media.lessThan('medium')`
            flex: 1;
          `}

          > div {
            display: flex;
            flex-direction: column;
            margin-top: 20px;
            margin-right: 10px;
            align-items: center;

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
          flex-wrap: wrap;

          ${media.lessThan('medium')`
            width: 144px
          `}

          > article {
            margin: 5px;
            padding: 5px 10px;
            background-color: #fff;
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
          border-radius: 50%;
          ${media.lessThan('medium')`
            width: 66px;
            height: 66px;
          `}
          > div {
            width: 72px;
            height: 72px;
            border: 5px solid #00e8e4;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;

            ${media.lessThan('medium')`
              width: 58px;
              height: 58px;
            `}

            p {
              font-size: 20px;
              color: #00e8e4;
              ${media.lessThan('medium')`
                font-size: 16px;
              `}
            }
          }
        }
      }
    }

    aside.wallpaper {
      grid-area: wallpaper;
      display: flex;
      ${media.lessThan('medium')`
        display: block;
      `}
    }
  }
  iframe {
    margin-top: 40px;
    margin-bottom: 40px;
    ${media.lessThan('medium')`
      width: 300px;
    `}
  }
`;
