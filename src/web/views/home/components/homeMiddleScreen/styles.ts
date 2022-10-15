import styled from "styled-components"
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

export const Blur = styled.div`
    padding-left: clamp(1rem, 10.42vw, 12.5rem);
    padding-right: clamp(1rem, 10.42vw, 12.5rem);
    padding-top: 40px;
    padding-bottom: 40px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color:${COLORS.white};
    @media (max-width: 599px) {
    padding-left:10px;
    padding-right:10px;
}
`;

export const TitleMiddleScreen = styled.a`
    text-align:center;
    font-weight:600;
    font-size:42px;
    margin-top:30px;
    @media (max-width: 1600px) {
    }
    @media (max-width: 900px) {
    font-size:32px;
    }
    @media (max-width: 499px) {
    font-size:24px;
    }
`;