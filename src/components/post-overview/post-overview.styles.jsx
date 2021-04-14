import styled, { css } from "styled-components/macro";

const onSelected = css`
  background-image: linear-gradient(
    -225deg,
    #ffe29f 0%,
    #ffa99f 48%,
    #ff719a 100%
  );
`;

const defaultBgc = css`
  background-color: #fff;
`;

const getBtnStyles = (props) => {
  return props.onSelected ? onSelected : defaultBgc;
};

export const Container = styled.div`
  /* background-color: #fff; */
  width: 100%;
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const CardContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  width: 70px;
  height: 70px;
  /* background-color: #fff; */
  outline: none;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.12);
  margin-right: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 0.5s;
  overflow: hidden;

  &:hover {
    /* background-image: linear-gradient(to top, #d76d77 0%, #fbe0e3 100%); */
    background-image: linear-gradient(
      -225deg,
      #ffe29f 0%,
      #ffa99f 48%,
      #ff719a 100%
    );
    color: #262626;
  }

  ${getBtnStyles}

  &:active {
    transform: scale(0.95);
  }

  &::before {
    content: "";
    width: 140%;
    height: 15px;
    border-radius: 0px;
    background-color: #fff;
    position: absolute;
    top: 20px;
    left: 34px;
    transform: translateX(-100%) rotate(70deg);
    transition: all 0.3s;
  }

  &:hover::before {
    transform: translateX(100%) rotate(45deg);
  }
`;
