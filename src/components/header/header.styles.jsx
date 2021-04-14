import styled from "styled-components/macro";

// Container <header>
export const Container = styled.header`
  width: 100%;
  height: 100px;
  background-color: #f7f7f7;;
  /* border-bottom: 1px solid #dbdbdb; */
  margin: 0 auto;
  position: sticky;
  top: 0;
  display: flex;
  z-index: 1;

  h1 {
    font-weight: 700;
  }
`;

export const ContainerSize = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// Nav <nav>
export const Nav = styled.nav`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    font-size: 1.6rem;
    text-decoration: none;
    padding: 50px 10px;
    transition: opacity 0.2s ease 0s, transform 0.2s ease 0s;
    cursor: pointer;

    &:hover {
      color: #999;
    }

    &:active {
      transform: scale(0.9);
    }
  }
`;
