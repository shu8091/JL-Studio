import styled from 'styled-components/macro';

export const ImgContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  transition: all 1.5s;
  -webkit-transition: all 1.5s;
  cursor: pointer;

  &:hover {
    transform: scale(1.07);
  }
`;

export const Title = styled.h2`
  color: #fff;
  text-align: center;
  margin-top: 10px;
`;