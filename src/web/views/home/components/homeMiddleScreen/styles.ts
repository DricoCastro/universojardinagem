import styled from "styled-components"
import { COLORS } from "../../../../../../utils/colors";

interface EventBannerContainerProps {
    url?: string | null;
}

export const EventBannerStyle = styled.div<EventBannerContainerProps>`
    width:100%;
    height:auto;
    background-color:${COLORS.white};
    background-image: url(${({ url }) => url});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

export const Blur = styled.div`
    padding-left: clamp(1rem, 10.42vw, 12.5rem);
    padding-right: clamp(1rem, 10.42vw, 12.5rem);
    padding-top: 40px;
    padding-bottom: 600px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color:${COLORS.white};
    @media (max-width: 650px) {
    padding-bottom: 300px;
  }
  
`;

export const HolderTitleMiddleScreen = styled.div`
    margin-top:30px;
    display:flex;
    flex-direction:column;
    align-items:center;
    @media (max-width: 599px) {
    width:100%;
}
`;

export const TitleMiddleScreen = styled.span`
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

export const SubTitleMiddleScreen = styled.a`
    text-align:center;
    font-weight:600;
    font-size:36px;
    margin-top:5px;
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
`;