import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  height: 70px;
  background: ${lighten(0.04, '#116193')};
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 70px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #00e8e4;
    font-weight: 200;
  }
`;
