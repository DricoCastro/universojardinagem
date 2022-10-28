import styled from "styled-components";
import { COLORS } from "../../../../../../utils/colors";



interface EventBannerContainerProps {
    url?: string | null;
  }
  
export const EventBannerStyle = styled.div<EventBannerContainerProps>`
  width:100%;
  height:115vh;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (max-width: 799px) {
    height:auto;
  }
  `;

 export const Blur = styled.div`
  width:100%;
  height:100%;
  backdrop-filter:blur(0px);
  padding-left: clamp(1rem, 10.42vw, 12.5rem);
  padding-right: clamp(1rem, 10.42vw, 12.5rem);
  display:flex;
  align-items:top;
  justify-content:top;
  @media (max-width: 799px) {
  padding-bottom:90px;
  background-color: rgba(0,0,0, 0.2);
  }
  @media (max-width: 599px) {
  padding-left:20px;
  padding-right:20px;
  padding-bottom:90px;
  }
 `;

export const CardMiddleTexts = styled.div`
  display:flex;
  flex-direction:column;
  align-items:top;
  justify-content:top;
  color:${COLORS.white};
  padding-left:40px;
  padding-right:40px;
  @media (max-width: 900px) {
  padding-left:0px;
  padding-right:0px;
  }
    `;

export const TitleCardTop = styled.a`
  text-align:center;
  font-weight:600;
  font-size:42px;
  margin-top:250px;
  @media (max-width: 1600px) {
  margin-top:200px;
  }
  @media (max-width: 900px) {
  font-size:32px;
  margin-top:100px;
  }
  @media (max-width: 499px) {
  font-size:24px;
  }
  @media (max-width: 399px) {
  font-size:22px;
  }
  
`;

export const SubTitleCardTop = styled.a`
  text-align:center;
  font-size:21px;
  margin-top:60px;
  font-weight:500;
  @media (max-width: 1600px) {
  margin-top:40px;
  }
  @media (max-width: 900px) {
  font-size:18px;
  }
  @media (max-width: 799px) {
  line-height:22px; 
  }
  @media (max-width: 499px) {
  font-size:16px;
  }
`;

export const DescriptionCardTop = styled.a`
  line-height:22px; 
  text-align:center;
  font-size:16px;
  margin-top:40px;
  font-weight:400;
  @media (max-width: 1600px) {
  margin-top:20px;
  }
  @media (max-width: 900px) {
  margin-top:45px;
  font-size:16px;
  }
  @media (max-width: 799px) {
  margin-top:15px;
  }
  @media (max-width: 499px) {
  font-size:14px;
  }
`;

export const HolderButton = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
  margin-top:50px;
`;