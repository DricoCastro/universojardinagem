import Image from "next/image";
import ServicesCarousel from "./components/homeCarousel";
import {
  TitleMiddleScreen,
  EventBannerStyle,
  Blur,
  SubTitleMiddleScreen,
  HolderTitleMiddleScreen,
} from "./styles";
const logo = require("../../../../../../public/images/logo-removebg.png");
const ImageBackground = "/images/background-middle-screen.jpg";
export const HomeTypesOfServices = () => {
  return (
    <EventBannerStyle url={ImageBackground}>
      <Blur>
        <Image src={logo} alt="logo" width={150} height={150}></Image>
        <HolderTitleMiddleScreen>
          <TitleMiddleScreen>
            Confira abaixo os <a>serviços</a> que oferecemos,
          </TitleMiddleScreen>
          <SubTitleMiddleScreen>clique e saiba mais!</SubTitleMiddleScreen>
        </HolderTitleMiddleScreen>

        <ServicesCarousel />
      </Blur>
    </EventBannerStyle>
  );
};
