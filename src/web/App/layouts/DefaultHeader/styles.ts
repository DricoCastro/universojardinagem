import styled from "styled-components"
import { COLORS } from "../../../../../utils/colors";

export const HomeHeaderHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: clamp(1rem, 1.3vw, 1.56rem);
    padding-bottom: clamp(1rem, 1.3vw, 1.56rem);
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color:${COLORS.white};
    background-color:${COLORS.parsley}; 
    @media (max-width: 599px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;
