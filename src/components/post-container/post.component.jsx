import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ImgContainer } from './post.styles';

const Post = () => (
  <Container>
    <h2>Post Title</h2>
    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, harum?</h3>
    <span>2020/09/01</span>
    <ImgContainer></ImgContainer>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, harum?
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, harum?
    </p>
    <Link to=''>READ MORE&raquo;</Link>
  </Container>
)

export default Post;