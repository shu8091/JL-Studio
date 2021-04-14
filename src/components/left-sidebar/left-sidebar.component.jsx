import React from 'react';

import { Container } from './left-sidebar.styles';

const LeftSidebar = ({ children }) => {
  return (
    <Container>{children}</Container>
  )
}

export default LeftSidebar;