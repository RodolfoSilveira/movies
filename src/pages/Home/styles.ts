import styled from 'styled-components';
import { darken, lighten } from 'polished';
import media from 'styled-media-query';

export const Container = styled.div`
  max-width: 800px;
  height: 100%;
  margin: 50px auto;

  ${media.lessThan('medium')`
    /* screen width is less than 768px (medium) */
    max-width: 300px;
  `}

  .search-box {
    width: 100%;
    padding: 10px;
    background-color: #ebebeb;
    border-radius: 18px;
    height: 40px;
    display: flex;
    align-items: center;

    input {
      border: none;
      background-color: #ebebeb;
      width: 100%;
      margin: 0 20px;

      ${media.lessThan('medium')`
        /* screen width is less than 768px (medium) */
        font-size: 0.7rem;
      `}
    }

    input::placeholder {
      color: ${darken(0.08, '#b0c6d3')};
    }
  }
`;

export const Paginate = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  font-size: 18px;
  color: #116193;

  div {
    margin: 0 0 20px;
    width: 40px;
    height: 40px;
    color: #00e8e4;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  div + div {
    margin-left: 5px;
  }

  div.active {
    background: ${lighten(0.04, '#116193')};
    border-radius: 50%;
    > li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #00e8e4;
    }
  }
`;
