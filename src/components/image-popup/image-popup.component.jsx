import React from 'react';
import { Container } from './image-popup.styles';

const ImagePopup = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
)

export default ImagePopup;