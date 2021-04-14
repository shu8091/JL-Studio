import React from 'react';

import Card from '../card/card.component';

import { Container, BtnContainer, Button, CardContainer } from './post-overview.styles';

class PostOverview extends React.Component {
  state = {
    onSelected: false,
    posts: [],
    categories: []
  }

  handleClick = e => {
    const { cat } = e.target;
    this.setState({
      cat
    })
  };

  componentDidMount() {
    fetch('http://localhost/react/jl-studio/src/api/get_posts.php', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => this.setState({ posts: data }, () => console.log(this.state.posts)))

    fetch('http://localhost/react/jl-studio/src/api/get_categories.php', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => this.setState({ categories: data }, () => console.log(this.state.categories)))
  }

  render() {
    const { onSelected, posts, categories, cat } = this.state;
    return (
      <Container>
        <BtnContainer>
          <Button>ALL</Button>
          {
            categories.map((cat, index) => (
              <Button key={index} cat={cat} onClick={this.handleClick} onSelected={onSelected}>{cat.cat_title.toUpperCase()}</Button>
            ))
          }
        </BtnContainer>
        <CardContainer>
          {
            posts.map((post, index) => (
              <Card key={index} post={post} />
            ))
          }
        </CardContainer>
      </Container>
    )
  }
}

export default PostOverview;