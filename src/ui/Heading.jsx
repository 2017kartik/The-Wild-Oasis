import styled from "styled-components";
import { css } from "styled-components";

// const test = css`
//   text-align: center;
// `;

const H1 = styled.h1`
  ${(props) =>
    props.type === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.type === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.type === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}

    line-height: 1.5;
`;

export default H1;
