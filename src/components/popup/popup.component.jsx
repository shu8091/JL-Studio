import React from 'react';

import { Wrapper, Inner, Close, Content } from './popup.styles';

const Popup = ({ children, closePopup, ...otherProps }) => (
  <Wrapper>
    <Inner {...otherProps}>
      <Close onClick={closePopup}> &times; </Close>
      <Content>{children}</Content>
    </Inner>
  </Wrapper>
)

export default Popup;