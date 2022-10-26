import styled from "styled-components";
import { COLORS } from "../../../../../../utils/colors";

interface EventBannerContainerProps {
    url?: string | null;
}

export const EventBannerStyle = styled.div<EventBannerContainerProps>`
    width:100%;
    height:auto;
    background-image: url(${({ url }) => url});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

export const FaqSectionHolder = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding-top: 200px;
    padding-bottom:200px;
    padding-left: clamp(1rem, 10.42vw, 12.5rem);
    padding-right: clamp(1rem, 10.42vw, 12.5rem);
    @media (max-width: 599px) {
    padding-top: 100px;
    padding-bottom:100px;
    padding-left:10px;
    padding-right:10px;
  }
`; 

export const HolderTitleFaqScreen = styled.div`
    margin-bottom:60px;
    display:flex;
    flex-direction:column;
    @media (max-width: 599px) {
    width:100%;
    padding-left:10px;
    padding-right:10px; 
}
`;

export const TitleFaqScreen = styled.span`
    text-align:center;
    font-weight:600;
    font-size:36px;
    color:${COLORS.mirage};
    @media (max-width: 1600px) {
    }
    @media (max-width: 900px) {
    font-size:32px;
    }
    @media (max-width: 499px) {
    width:100%;
    font-size:24px;
    }
    a{
    text-decoration:underline 3px solid ${COLORS.crete};
}
`;

export const FaqTitle = styled.span`
color:${COLORS.parsley};
    font-size:16px;
    font-weight:700;
`; 

export const FaqDescription = styled.span`
    font-size:14px;
    font-weight:500;
`; 