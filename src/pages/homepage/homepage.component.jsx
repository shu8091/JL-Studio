import React from 'react';

import Main from '../../components/main-container/main-container.component';
import FontDecoration from '../../components/font-decoration/font-decoration.component';
import Carousel from '../../components/carousel/carousel.component';

const HomePage = () => {
  return (
    <Main>
      <FontDecoration fs='11'>
        CODE ADDICTED
      </FontDecoration>

      <Carousel></Carousel>
    </Main>
  )
}

export default HomePage;