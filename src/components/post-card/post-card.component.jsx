import React from 'react';

import { Container, Left, Right } from './post-card.styles';

const posts = [
  {
    id: 1,
    imageUrl: "https://picsum.photos/900/400?image=1000",
    title: 'Lorem1',
    category: 'CODING',
    subject: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci',
    content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci',
    date: '2020/01/01'
  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/600/400?image=1050",
    title: 'Lorem2',
    category: 'TRAVEL',
    subject: 'Contrary to popular belief, Lorem Ipsum is not simply random text',
    content: 'Contrary to popular belief, Lorem Ipsum is not simply random text',
    date: '2020/01/02'
  }

]

class PostCard extends React.Component {
  state = {
    posts
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        {
          posts
            .map(({ id, imageUrl, title, category, subject, date }) => (
              <Container key={id}>
                <Left>
                  <span></span>
                  <img src={imageUrl} alt='images' />
                </Left>
                <Right>
                  <span>{category}</span>
                  <h2>{title}</h2>
                  <h5>{subject}</h5>
                  <span>{date}</span>
                </Right>
              </Container >
            ))
        }
      </div>
    )
  }
}

export default PostCard;