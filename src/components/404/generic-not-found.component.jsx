import React from 'react';

import Main from '../main-container/main-container.component';

import { Container } from './generic-not-found.styles';

const GenericNotFound = () => (
  <Main>
    <Container>
      <div className="wave">
        <h2>OOPS 404!</h2>
        <h2>OOPS 404!</h2>
      </div>
      <div className="content">
        <h3 className='typing'>Page not found</h3>
        <h3 className='waiting'>&nbsp;|</h3>
      </div>
      <div className="info">
        <span>The page you are looking for is not exist.</span>
        <span>Click the button to go back to MARS.</span>
      </div>
    </Container>
  </Main>
);

export default GenericNotFound;