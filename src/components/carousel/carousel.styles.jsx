import styled from "styled-components/macro";

export const Container = styled.div`
  height: 40vh;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
  margin-top: 60px;

  input[type="radio"] {
    display: none;
  }

  label {
    margin: auto;
    width: 60%;
    height: 100%;
    min-height: 300px;
    border-radius: 10px;
    position: absolute;
    left: 0;
    right: 0;
    cursor: pointer;
    overflow: hidden;
    transition: transform 0.4s ease;

    .content {
      background-color: #000;
      width: 80%;
      height: 100%;
      margin: 0 auto;

      img {
        height: 100%;
      }
    }

    .btn {
      width: 10%;
      height: 100%;
      padding: 15px;
      font-size: 1.8rem;
      font-weight: 600;
      color: #494949;
      background-color: #f1f1f1;
      opacity: 0.9;
      position: absolute;
      writing-mode: vertical-lr;
      text-orientation: sideways-right;
    }

    .btn::before {
      content: "--";
      font-weight: 600;
      color: #999;
    }

    .btn::after {
      content: "------------";
      font-weight: 600;
      color: #999;
    }

    .btn2 {
      right: 0;
      top: 0;
      writing-mode: vertical-lr;
      text-orientation: sideways;
      transform: rotate(-180deg);
    }
  }
  #s1:checked ~ #slide4,
  #s2:checked ~ #slide5,
  #s3:checked ~ #slide1,
  #s4:checked ~ #slide2,
  #s5:checked ~ #slide3 {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
    transform: translate3d(-30%, 0, -200px);
  }

  #s1:checked ~ #slide5,
  #s2:checked ~ #slide1,
  #s3:checked ~ #slide2,
  #s4:checked ~ #slide3,
  #s5:checked ~ #slide4 {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);
    transform: translate3d(-15%, 0, -100px);
  }

  #s1:checked ~ #slide1,
  #s2:checked ~ #slide2,
  #s3:checked ~ #slide3,
  #s4:checked ~ #slide4,
  #s5:checked ~ #slide5 {
    box-shadow: 0 13px 25px 0 rgba(0, 0, 0, 0.3),
      0 11px 7px 0 rgba(0, 0, 0, 0.19);
    transform: translate3d(0, 0, 0);
  }

  #s1:checked ~ #slide2,
  #s2:checked ~ #slide3,
  #s3:checked ~ #slide4,
  #s4:checked ~ #slide5,
  #s5:checked ~ #slide1 {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);
    transform: translate3d(15%, 0, -100px);
  }

  #s1:checked ~ #slide3,
  #s2:checked ~ #slide4,
  #s3:checked ~ #slide5,
  #s4:checked ~ #slide1,
  #s5:checked ~ #slide2 {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
    transform: translate3d(30%, 0, -200px);
  }

  #slide1 {
    background: #00bcd4;
  }

  #slide2 {
    background: #4caf50;
  }

  #slide3 {
    background: #cddc39;
  }

  #slide4 {
    background: #ffc107;
  }

  #slide5 {
    background: #ff5722;
  }
`;
