import styled, { css } from "styled-components/macro";

const buttonStyles = css`
  background-color: #000;
  color: #fff;
`;

const readMore = css`
  color: #e99191;
  background-color: unset;
  width: 200px;
  height: 20px;
  line-height: 20px;
  padding: 0px 0px;

  &:hover {
    background-color: white;
    color: black;
    border: none;
    outline: none;
  }
`;

const getButtonStyles = (props) => {
  return props.readMore ? readMore : buttonStyles;
};

export const CustomButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 1.5rem;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    outline: none;
  }

  ${getButtonStyles}
`;
