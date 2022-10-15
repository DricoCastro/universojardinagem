import styled from "styled-components"
import { COLORS } from "../../../../../../../../utils/colors";

export const HolderCards = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:column;
    margin-top:50px;
    @media (max-width: 450px) {
        margin-top:20px;
  }
`;

export const HolderCardsFirstLine = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    flex-direction:row;
    @media (max-width: 450px) {
        flex-direction:column;
  }
`;

export const HolderCardsSecondLine = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    flex-direction:row;
    margin-top:50px;
    @media (max-width: 450px) {
        flex-direction:column;
        margin-top:0px;
  }
`;

export const HolderCardsPlantioMobile = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    flex-direction:row;
    margin-top:50px;
    @media (max-width: 450px) {
        margin-top:0px;
  }
`;


export const Card = styled.div`
    background-color:${COLORS.white};;
    color:${COLORS.black};
    border-radius:8px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    transition: 0.05s ease-out;
  :hover{
    box-shadow: 0 3px 10px ${COLORS.celtic};
    transform: translate3d(0,-5px,0);
  }
  @media (max-width: 450px) {
        margin-top:30px;
  }
`;

export const CardPlantioWeb = styled.div`
    background-color:${COLORS.white};;
    color:${COLORS.black};
    border-radius:8px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    transition: 0.05s ease-out;
    :hover{
    box-shadow: 0 3px 10px ${COLORS.celtic};
    transform: translate3d(0,-5px,0);
  }
    @media (max-width: 699px) {
    display:none;
  }
`;

export const CardPlantioMobile = styled.div`
    display:none;
    @media (max-width: 699px) {
    background-color:${COLORS.white};;
    color:${COLORS.black};
    border-radius:8px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    transition: 0.05s ease-out;
    :hover{
    box-shadow: 0 3px 10px ${COLORS.celtic};
    transform: translate3d(0,-5px,0);
  }
  @media (max-width: 450px) {
        margin-top:30px;
  }
  }
`;


export const DivImg = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;  
`;

export const TitleService = styled.h1`
    font-size:20px;
    font-weight:600px;
    text-align:center;
    margin-top:20px;
    @media (max-width: 450px) {
        font-size:18px;
  }
`;