import React from 'react';

import { Container, Left, Right } from './post-card.styles';
class PostCard extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    fetch('http://localhost/react/jl-studio/src/api/get_posts.php', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => this.setState({ posts: data }, () => console.log(this.state.posts)))
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        {
          posts.reduce((max, post) => (max.post_id < post.post_id)
            ?
            (
              <Container key={max.post_id}>
                <Left>
                  <span></span>
                  <img src={max.imageUrl} alt='images' />
                </Left>
                <Right>
                  <span>{max.category}</span>
                  <h2>{max.title}</h2>
                  <h5>{max.subject}</h5>
                  <span>{max.date}</span>
                </Right>
              </Container >
            )
            :
            (
              <Container key={post.post_id}>
                <Left>
                  <span></span>
                  <img src={post.imageUrl} alt='images' />
                </Left>
                <Right>
                  <span>{post.category}</span>
                  <h2>{post.title}</h2>
                  <h5>{post.subject}</h5>
                  <span>{post.date}</span>
                </Right>
              </Container >
            ), 0
          )
        }
      </div>
    )
  }
}

export default PostCard;