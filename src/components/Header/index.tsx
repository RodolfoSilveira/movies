import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Link to="/">
          <h1>Movies</h1>
        </Link>
      </Content>
    </Container>
  );
};

export default Header;
