import styled, { css } from "styled-components/macro";

const innerStyles = css`
  background: #fff;
`;

const imgStyles = css`
  background-image: linear-gradient(to right, #1b1b1b 0%, #222 100%);
`;

const getInnerStyles = (props) => (props.imgStyles ? imgStyles : innerStyles);

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 1;
`;

export const Inner = styled.div`
  position: absolute;
  top: ${(props) => props.top || "10"}%;
  left: ${(props) => props.left || "10"}%;
  right: ${(props) => props.right || "10"}%;
  bottom: ${(props) => props.bottom || "10"}%;
  border-radius: 10px;
  margin: auto;

  ${getInnerStyles}
`;

export const Content = styled.div`
  width: 99%;
  position: absolute;
  top: 15%;
  /* left: 10%;
  right: 10%; */
  bottom: 0%;
  overflow: hidden;
`;

export const Close = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 5rem;
  color: #dbdbdb;
  cursor: pointer;
  transition: all 1s;

  &:hover {
    color: #6aff3d;
  }

  &:active {
    transform: scale(0.9);
  }
`;
