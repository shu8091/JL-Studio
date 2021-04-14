import React from 'react';

import { Container, Sculpture } from './font-decoration.styles';

const FontDecoration = ({ children, ...otherProps }) => (
  <Container>
    <Sculpture {...otherProps}>{children}</Sculpture>
  </Container>
)

export default FontDecoration;