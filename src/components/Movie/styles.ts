import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const MovieBox = styled.div`
  margin-top: 40px;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas: "wallpaper header" "wallpaper content";

  .wallpaper {
    grid-area: wallpaper;
    display: flex;
  }

  .header {
    grid-area: header;
    height: 60px;
    width: 500px;
    background: ${lighten(0.04, '#116193')};
    padding: 0 30px;
    display: flex;
    align-items: flex-end;
    z-index: -1;

    header {
      height: 60px;
      max-width: 600px;
      padding-top: 25px;
      display: flex;
      flex-wrap: wrap;

      > h2 {
        padding-left: 60px;
        padding-bottom: 5px;
        font-size: 1.3rem;
        font-weight: 200;
        color: #00e8e4;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 400px;
        overflow: hidden;
      }
    }
  }

  .content {
    grid-area: content;
    background-color: #ebebeb;
    z-index: -1;
    position: relative;

    > div {
      z-index: 1;
      width: 60px;
      height: 60px;
      background: ${lighten(0.04, '#116193')};
      display: flex;
      align-items: center;
      justify-content: center;
      border: 5px solid #00e8e4;
      border-radius: 50%;
      position: absolute;
      top: -30px;
      left: 30px;
      p {
        font-size: 18px;
        color: #00e8e4;
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
        line-height: 1.3;
        /* white-space: nowrap; */
        text-overflow: ellipsis;
        /* width: 500px; */
        /* max-height: 100px; */
        overflow: hidden;
      }

      > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 10px 0;

        > article {
          margin: 10px;
          padding: 5px 15px;
          background-color: #FFF;
          border: 1px solid #116193;
          border-radius: 18px;
          color: #116193;
        }
      }
    }
  }
`;
