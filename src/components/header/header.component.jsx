import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ContainerSize, Nav } from './header.styles';
// import styles from './header.module.scss';

const Header = () => {
  return (
    <Container>
      <ContainerSize>
        <Link to='/'><h1>CodeCAINE</h1></Link>
        <Nav>
          <Link to='/works'>Works</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/shop'>Shop</Link>
        </Nav>
      </ContainerSize>
    </Container>
  )
}

export default Header;