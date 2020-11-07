import styled from 'styled-components';
import { darken, lighten } from 'polished';
import media from 'styled-media-query';

export const MovieBox = styled.div`
  margin: 40px auto;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas: 'wallpaper header' 'wallpaper content';

  ${media.lessThan('medium')`
    margin: 40px auto;
    max-width: 300px;
    grid-template-columns: 200px;
    grid-template-rows: 60px 1fr;
    grid-template-areas: "header" "content" "wallpaper";
  `}

  .wallpaper {
    grid-area: wallpaper;
    display: flex;
    ${media.lessThan('medium')`
      display: block;
    `}
  }

  .header {
    grid-area: header;
    width: 500px;
    background: ${lighten(0.04, '#116193')};
    padding: 0 30px;
    display: flex;
    align-items: flex-end;
    z-index: -1;

    ${media.lessThan('medium')`
      width: 300px;
      /* max-width: 450px; */
    `}

    header {
      max-width: 600px;
      padding-top: 25px;
      display: flex;
      flex-wrap: wrap;

      > h2 {
        padding-left: 70px;
        padding-bottom: 5px;
        font-size: 1.3rem;
        font-weight: 200;
        color: #00e8e4;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 400px;
        overflow: hidden;
        ${media.lessThan('medium')`
          font-size: 1rem;
          width: 250px;
        `}
      }
    }
  }

  .content {
    grid-area: content;
    background-color: #ebebeb;
    z-index: -1;
    position: relative;
    ${media.lessThan('medium')`
      width: 300px;
    `}

    > div {
      z-index: 1;
      width: 60px;
      height: 60px;
      background: ${lighten(0.04, '#116193')};
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      position: absolute;
      top: -30px;
      left: 30px;

      > div {
        width: 54px;
        height: 54px;
        border: 3px solid #00e8e4;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        p {
          font-size: 18px;
          color: #00e8e4;
        }
      }
    }

    > span {
      padding: 2px 0 5px 100px;
      color: ${darken(0.08, '#bdbdbd')};
      font-size: 16px;
      margin-top: 5px;
      display: block;
    }

    section {
      padding: 20px 30px;

      > p {
        width: 100%;
        line-height: 1.3em;
        /* white-space: nowrap; */
        text-overflow: ellipsis;
        /* width: 500px; */
        /* max-height: 100px; */
        overflow: hidden;

        ${media.lessThan('medium')`
          width: 100%;
          line-height:1.2em;
          height:3.6em;
        `}
      }

      > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        margin: 10px 0;

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
    }
  }
`;
