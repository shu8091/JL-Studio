import React from 'react';

import Main from '../../components/main-container/main-container.component';
import LeftSidebar from '../../components/left-sidebar/left-sidebar.component';
import RightContainer from '../../components/right-container/right-container.component';
import MasonryWrapper from '../../components/masonry/masonry.component';
import AuthorInfo from '../../components/author-info/author-info.component';

import { Container } from './works.styles';

const WorkPage = () => {
  return (
    <Main>
      <Container>
        <LeftSidebar>
          <AuthorInfo />
        </LeftSidebar>
        <RightContainer>
          <MasonryWrapper />
        </RightContainer>
      </Container>
    </Main>
  )
}

export default WorkPage;