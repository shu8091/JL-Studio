import React from 'react';

import { Content, Up, Down } from './card.styles';

const Card = ({ post }) => (
  <Content>
    <Up>
      <img src={post.imageUrl} alt='images' />
    </Up>
    <Down>
      <span>{post.cat_title.toUpperCase()}</span>
      <h2>{post.title}</h2>
      <h5>{post.subject}</h5>
      <span>{post.date}</span>
    </Down>
  </Content>
)

export default Card;