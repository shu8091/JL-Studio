import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
`;

export const Sculpture = styled.div`
  /* color: #e1e1e1; */
  color: #fc8692;
  margin: 0 auto;
  /* color: transparent; */
  /* background: linear-gradient(to top, #3a1c71, #d76d77, #ffaf7b);
  background: -webkit-linear-gradient(to top, #3a1c71, #d76d77, #ffaf7b); */
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-stroke: 2px #d76d77;
  font-size: ${(props) => props.fs || "15"}rem;
  /* font-family: "Architects Daughter", cursive; */
  /* font-weight: 500; */
  text-align: center;
  /* text-shadow: -1px 1px 0 rgba(160, 160, 160, 0.1),
    1px -1px 0 rgba(255, 255, 255, 0.1), 1px -1px 25px white,
    -1px 1.9px 1px #a0a0a0, -2px 3.8px 2px #a0a0a0,
    -3px 5.7px 3px rgba(160, 160, 160, 0.6666666667),
    -4px 7.6px 4px rgba(160, 160, 160, 0.5),
    -5px 9.5px 5px rgba(160, 160, 160, 0.4),
    -6px 11.4px 6px rgba(160, 160, 160, 0.3333333333),
    -7px 13.3px 7px rgba(160, 160, 160, 0.2857142857),
    -8px 15.2px 8px rgba(160, 160, 160, 0.25),
    -9px 17.1px 9px rgba(160, 160, 160, 0.2222222222),
    -10px 19px 10px rgba(160, 160, 160, 0.2),
    -11px 20.9px 11px rgba(160, 160, 160, 0.1818181818),
    -12px 22.8px 12px rgba(160, 160, 160, 0.1666666667),
    -13px 24.7px 13px rgba(160, 160, 160, 0.1538461538),
    -14px 26.6px 14px rgba(160, 160, 160, 0.1428571429),
    -15px 28.5px 15px rgba(160, 160, 160, 0.1333333333),
    -16px 30.4px 16px rgba(160, 160, 160, 0.125),
    -17px 32.3px 17px rgba(160, 160, 160, 0.1176470588),
    -18px 34.2px 18px rgba(160, 160, 160, 0.1111111111),
    -19px 36.1px 19px rgba(160, 160, 160, 0.1052631579),
    -20px 38px 20px rgba(160, 160, 160, 0.1),
    -21px 39.9px 21px rgba(160, 160, 160, 0.0952380952),
    -22px 41.8px 22px rgba(160, 160, 160, 0.0909090909),
    -23px 43.7px 23px rgba(160, 160, 160, 0.0869565217),
    -24px 45.6px 24px rgba(160, 160, 160, 0.0833333333),
    -25px 47.5px 25px rgba(160, 160, 160, 0.08); */
`;

export const Font = styled.div`
  text-align: center;
  font-size: ${(props) => props.fs || "15"}rem;
  color: transparent;
  -webkit-text-stroke: 2px #d76d77;
`;
