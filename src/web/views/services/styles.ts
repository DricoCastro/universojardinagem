import styled from "styled-components"
import { COLORS } from "../../../../utils/colors";

export const ServicesPageHolder = styled.div`
    background-color:${COLORS.killarney};
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    min-width:100%;
    padding-left: clamp(1rem, 10.42vw, 12.5rem);
    padding-right: clamp(1rem, 10.42vw, 12.5rem);
    padding-top:60px;
    padding-bottom:60px;
    row-gap:80px;
    @media (max-width: 599px) {
    padding-left:10px;
    padding-right:10px;
  }
`;

export const TitleServicesPage = styled.span`
    text-align:center;
    font-weight:600;
    font-size:34px;
    color:${COLORS.white};
    text-decoration:underline 3px solid ${COLORS.apple};
    letter-spacing:4px;
    @media (max-width: 900px) {
    font-size:32px;
    }
    @media (max-width: 499px) {
    width:100%;
    font-size:24px;
    }
`;

export const ServicesContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

export const HolderServicesText = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    width:60%;
    @media (max-width: 1300px) {
    width:48%;
    }
    @media (max-width: 1050px) {
        width:100%;
        align-items:center;
    }
`;


export const ServicesTitle = styled.span`
    text-align:center;
    text-decoration:underline 3px solid ${COLORS.apple};
    font-weight:600;
    font-size:28px;
    color:${COLORS.white};
    letter-spacing:2px;
    @media (max-width: 1050px) {
    font-size:26px;
    }
    @media (max-width: 499px) {
    width:100%;
    font-size:20px;
    }
`;

export const ServicesDescription = styled.span`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:20px;
    line-height:25px;
    color:${COLORS.white};
    padding-top:30px;
    @media (max-width: 1050px) {
    font-size:18px;
    text-align:center;
    }
    @media (max-width: 499px) {
    width:100%;
    font-size:14px;
    }
`;

export const ServicesContainerIconAndText = styled.div`
    display:flex;
    align-items:center;
    flex-direction:row;
    justify-content:space-between;
    @media (max-width: 1300px) {
    justify-content:space-between;
    }
    @media (max-width: 1050px) {
    flex-direction:column;
    }
`;

export const ServicesContainerIconAndTextReverse = styled.div`
    display:flex;
    align-items:center;
    flex-direction:row;
    justify-content:space-between;
    @media (max-width: 1300px) {
    justify-content:space-between;
    }
    @media (max-width: 1050px) {
    flex-direction:column-reverse;
    }
`;

