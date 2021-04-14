import React from 'react';

import Main from '../../components/main-container/main-container.component';
import PostCard from '../../components/post-card/post-card.component';
import Card from '../../components/card/card.component';

import { Banner, Content } from './blog.styles';

const BlogPage = () => {
  return (
    <Main>
      <Banner>
        <PostCard />
      </Banner>
      <Content>
        <Card />
      </Content>
    </Main>
  )
}

export default BlogPage;