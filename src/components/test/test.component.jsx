import React from 'react';

class Test extends React.Component {
  state = { posts: [] }
  componentDidMount() {
    fetch("http://localhost/react/jl-studio/src/api/get_posts.php", {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ posts: data }, () => console.log(this.state.posts))
      })
  }
  render() {
    const { posts } = this.state;
    return (
      <div>{
        posts.map((post, idx) => (
          <div key={idx}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </div>
        ))
      }</div>
    )
  }
}

export default Test;