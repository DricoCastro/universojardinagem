import Image from "next/image";
import { CardServices } from "./components/cardServices";
import { TitleMiddleScreen, EventBannerStyle, Blur } from "./styles";
const logo = require("../../../../../../public/images/logo-removebg.png");
const ImageBackground = "/images/backgroundMiddle.jpg";
export const HomeTypesOfServices = () => {
  return (
    <EventBannerStyle url={ImageBackground}>
      <Blur>
        <Image src={logo} alt="logo" width={200} height={200}></Image>
        <TitleMiddleScreen>
          Confira abaixo os serviços que oferecemos, <br /> clique e saiba mais!
        </TitleMiddleScreen>
        <CardServices />
      </Blur>
    </EventBannerStyle>
  );
};
