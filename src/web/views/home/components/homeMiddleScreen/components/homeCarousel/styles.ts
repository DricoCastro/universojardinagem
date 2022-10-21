import styled from "styled-components"
import { COLORS } from "../../../../../../../../utils/colors";

export const PageHolder = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-self: center;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 40px;
`;

export const HolderCarousel = styled.div`
    display: flex;
    cursor: grab;
    width: 100%;
    height: auto;
    margin: auto;
    flex-direction: column;
    &:active{
    cursor: grabbing;
        };
`;

export const HolderCard = styled.div`
   margin: auto;
`;

export const Card = styled.div`
   margin: auto;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
   padding-top:40px;
   padding-bottom:40px;
   padding-right:20px;
   padding-left:20px;
`;

export const CardTitle = styled.span`
color:${COLORS.mirage};
    font-size:20px;
    font-weight:600;
    text-align:center;
    margin-top:15px;
    @media (max-width: 650px) {
        font-size:18px;
  }
`;