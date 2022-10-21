import styled from "styled-components"
import { COLORS } from "../../../../utils/colors";

export const HomeHeaderHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: clamp(1rem, 1.3vw, 1.56rem);
    padding-bottom: clamp(1rem, 1.3vw, 1.56rem);
    padding-left: clamp(1rem, 10.42vw, 12.5rem);
    padding-right: clamp(1rem, 10.42vw, 12.5rem);
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color:${COLORS.mirage};
    @media (max-width: 599px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:100%;
    @media (max-width: 599px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const HolderMenuIcon = styled.div`
display:none;
  @media (max-width: 900px) {
    display:flex;
  }
`;

export const HolderLogoHeader = styled.div`
  width:35%;
  display:flex;
  align-items:flex-start;
  @media (max-width: 1250px) {
    width:25%;
  }
`;

export const HolderTitlesHeader = styled.div`
  width:65%;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  @media (max-width: 1250px) {
    width:75%;
  }
`;

export const HolderTitleIcon = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  justify-self:center;
  text-align:center;
  border-radius:10px;
  padding-left:5px;
  padding-right:5px;
  cursor: pointer;
  transition: 0.05s ease-out;
  :hover{
    box-shadow: 0 3px 10px ${COLORS.celtic};
  transform: translate3d(0,-5px,0);
  }
  @media (max-width: 900px) {
    display:none;
  }

`;

export const TitlesHeader = styled.h1`
  font-size:20px;
  font-weight:500;
  margin-left:8px;
  padding-top:4px;
  @media (max-width: 1250px) {
    padding-top:0px;
    font-size:18px;
  }
`;

export const TitleHeaderMoney = styled.h1`
  font-size:20px;
  font-weight:500;
  margin-left:4px;
  padding-top:4px;
  @media (max-width: 1250px) {
    padding-top:0px;
    font-size:18px;
  }
`;

export const MenuItemStyledComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: end;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  cursor: pointer;
`;

export const TitleMenuDrawer = styled.a`
font-size:16px;
font-weight:600;
margin-left:15px;
`;



