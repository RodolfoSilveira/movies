import React from 'react';
import { Wrapper } from './styles';
import Header from '../../../components/Header';

interface Children {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<Children> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

export default DefaultLayout;
