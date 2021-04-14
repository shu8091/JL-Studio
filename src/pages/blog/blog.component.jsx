import React from 'react';

import Main from '../../components/main-container/main-container.component';
import PostCard from '../../components/post-card/post-card.component';
import PostOverview from '../../components/post-overview/post-overview.component';
// import Card from '../../components/card/card.component';

import { Banner, Content } from './blog.styles';

const BlogPage = () => {
  return (
    <Main>
      <Banner>
        <PostCard />
      </Banner>
      <Content>
        <PostOverview />
      </Content>
    </Main>
  )
}

export default BlogPage;