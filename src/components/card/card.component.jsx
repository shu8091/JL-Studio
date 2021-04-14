import React from 'react';

import { Container, Content, Up, Down } from './card.styles';

class Card extends React.Component {
  state = { posts: [] }

  componentDidMount() {
    fetch('http://localhost/react/jl-studio/src/api/get_posts.php', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => this.setState({ posts: data }))
  }

  render() {
    const { posts } = this.state;
    return (
      <Container>
        {
          posts.map((post, index) => (
            <Content key={index}>
              <Up>
                <img src='' alt='images' />
              </Up>
              <Down>
                <span>{post.category}</span>
                <h2>{post.title}</h2>
                <h5>{post.subject}</h5>
                <span>{post.date}</span>
              </Down>
            </Content>
          ))
        }
      </Container>
    )
  }
}

export default Card;