import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  max-width: 700px;
  height: 100%;
  margin: 50px auto;

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
    }

    input::placeholder {
      color: ${darken(0.08, '#b0c6d3')};
    }
  }
`;

export const Paginate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  font-size: 18px;
  color: #116193;

  button {
    margin: 5px;
    width: 40px;
    height: 40px;
    background: ${lighten(0.04, '#116193')};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #00e8e4;
    border-radius: 50%;
    color: #00e8e4;
  }
`;
