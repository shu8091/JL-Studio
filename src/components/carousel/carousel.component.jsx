import React from 'react';
import { Container } from './carousel.styles';

const contents = [
  {
    imageUrl: "https://picsum.photos/600/400?image=1050",
    id: 1,
    title: 'About us'
  },
  {
    imageUrl: "https://picsum.photos/900/400?image=206",
    id: 2,
    title: 'Our works'
  },
  {
    imageUrl: "https://picsum.photos/300/300?image=20",
    id: 3,
    title: 'Project1'
  },
  {
    imageUrl: "https://picsum.photos/300/300?image=26",
    id: 4,
    title: 'Project2'
  },
  {
    imageUrl: "https://picsum.photos/300/300?image=216",
    id: 5,
    title: 'New post'
  }
]

class Carousel extends React.Component {
  state = {
    checked: true,
    timer: null,
    index: 0,
    contents
  }

  startTimer = () => {
    if (this.state.timer == null) {
      this.setState({ timer: setInterval(this.update, 5000) })
    }
  }

  stopTimer = () => {
    clearInterval(this.state.timer);
    this.setState({ timer: null });
  }

  update = () => {
    // this.setState({ index: this.state.index + 1 }, console.log(this.state))
    this.setState({ index: this.state.index + 1 })
    this.changeView();
  }

  changeView = () => {
    if (this.state.index > 4) this.setState({ index: 0 });
  }

  handleClick = e => {
    e.preventDefault();
    const { id } = e.target;
    console.log(id)
    this.setState({ index: id - 1 }, () => console.log(this.state))
    this.stopTimer();
    this.changeView();
    this.startTimer();
  }


  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  render() {
    const { checked, index } = this.state;
    return (
      <Container>
        <input type='radio' name='slider' id={`s${(index + 1)}`} defaultChecked={checked} />
        {
          contents.map(({ imageUrl, id, title }) => (
            <label key={id} htmlFor={`s${id}`} id={`slide${id}`} >
              <div id={id} className='btn' onClick={this.handleClick}>&ensp;{title}&ensp;</div>
              <div className='content'>
                <img src={imageUrl} alt='images' />
              </div>
              <div id={id} className='btn btn2' onClick={this.handleClick}>&ensp;{title}&ensp;</div>
            </label>
          ))
        }
      </Container>
    )
  }
}

export default Carousel;
