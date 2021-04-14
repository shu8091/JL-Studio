import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Popup from "../../components/popup/popup.component";
import ImagePopup from "../../components/image-popup/image-popup.component";

import { ImgContainer, Img, Title } from "./masonry.styles";

const images = [
  {
    imageUrl: "https://picsum.photos/600/400?image=1050",
    id: 1,
    title: "Lorem1",
  },
  {
    imageUrl: "https://picsum.photos/900/400?image=206",
    id: 2,
    title: "Lorem2",
  },
  {
    imageUrl: "https://picsum.photos/300/300?image=20",
    id: 3,
    title: "Lorem3",
  },
  {
    imageUrl: "https://picsum.photos/300/300?image=26",
    id: 4,
    title: "Lorem4",
  },
  {
    imageUrl: "https://picsum.photos/300/300?image=216",
    id: 5,
    title: "Lorem5",
  },
  {
    imageUrl: "https://picsum.photos/300/300?image=345",
    id: 6,
    title: "Lorem6",
  },
  {
    imageUrl: "https://picsum.photos/300/300?image=166",
    id: 7,
    title: "Lorem7",
  },
  {
    imageUrl: "https://picsum.photos/300/300?image=66",
    id: 8,
    title: "Lorem8",
  },
  {
    imageUrl: "https://picsum.photos/300/300?image=7",
    id: 9,
    title: "Lorem9",
  },
  {
    imageUrl: "https://picsum.photos/300/300?image=117",
    id: 10,
    title: "Lorem10",
  },
  {
    imageUrl: "https://picsum.photos/300/300?image=267",
    id: 11,
    title: "Lorem11",
  },
  {
    imageUrl: "https://picsum.photos/1200/900?image=67",
    id: 12,
    title: "Lorem12",
  },
];

class MasonryWrapper extends React.Component {
  state = {
    images,
    showPopup: false,
  };

  togglePopup = (e) => {
    const { src, title } = e.target;
    this.setState(
      {
        showPopup: !this.state.showPopup,
        src,
        title,
      },
      () => console.log(this.state)
    );
  };

  render() {
    const { src, title } = this.state;
    return (
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="10px" className="img-container">
          {images.map(({ imageUrl, id, title }) => (
            <ImgContainer key={id}>
              <Img
                key={id}
                src={imageUrl}
                title={title}
                alt="images"
                onClick={this.togglePopup}
              />
            </ImgContainer>
          ))}
          {this.state.showPopup ? (
            <Popup
              closePopup={this.togglePopup}
              top="15"
              left="15"
              right="15"
              bottom="15"
              imgStyles>
              {<ImagePopup style={{ backgroundImage: `url(${src})` }} />}
              {<Title>{title}</Title>}
            </Popup>
          ) : null}
        </Masonry>
      </ResponsiveMasonry>
    );
  }
}

export default MasonryWrapper;
