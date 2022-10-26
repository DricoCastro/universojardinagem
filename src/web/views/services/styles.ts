import styled from "styled-components"
import { COLORS } from "../../../../utils/colors";

export const ServicesPageHolder = styled.div`
    background-color:${COLORS.alabasterDark};
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
    text-shadow: 1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE, 4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC, 4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC, 0px 10px 5px rgba(79,119,45,0);
    text-align:center;
    font-weight:600;
    font-size:34px;
    color:${COLORS.mirage};
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
    text-decoration:underline 3px solid ${COLORS.crete};
    font-weight:600;
    font-size:28px;
    color:${COLORS.mirage};
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
    color:${COLORS.mirage};
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

