import Link from "next/link";
import { PrimaryIcon } from "../../components/PrimaryIcon";
import { IconsEnum } from "../../components/PrimaryIcon/enum/icons";
import Image from "next/image";
import {
  HomeFooterHolder,
  PanelFooterBottomContainer,
  PanelFooterBottomLinksUlContainer,
  PanelFooterBottomSocialMediaButtonContainer,
  PanelFooterBottomSocialMediaContainer,
  PanelFooterBottomSocialMediaContainerHolder,
  PanelFooterContainer,
  PanelFooterTopContainer,
} from "./styles";
import { COLORS } from "../../../../utils/colors";

const logo = require("../../../../public/images/logo_cut.png");

function onTapMenu() {
  alert("Em Construção");
}

export const DeafultFooter = () => {
  return (
    <HomeFooterHolder>
      <PanelFooterContainer>
        <PanelFooterTopContainer>
          <Image
            onClick={onTapMenu}
            style={{ cursor: "pointer" }}
            src={logo}
            alt="logoHeader"
            width={100}
            height={100}
          />
          <span>Universo Jardinagem S.A. © Copyright 2022</span>
        </PanelFooterTopContainer>
        <PanelFooterBottomContainer>
          <PanelFooterBottomLinksUlContainer>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Serviços</Link>
            </li>
            <li>
              <Link href="/">Portfólio</Link>
            </li>
            <li>
              <Link href="/">Orçamento</Link>
            </li>
            <li>
              <Link href="/">Loja</Link>
            </li>
          </PanelFooterBottomLinksUlContainer>
          <PanelFooterBottomSocialMediaContainerHolder>
            <span>Vem conversar com a gente</span>
            <PanelFooterBottomSocialMediaContainer>
              <PanelFooterBottomSocialMediaButtonContainer>
                <Link href="/">
                  <PrimaryIcon
                    fill={COLORS.crete}
                    icon={IconsEnum.FACEBOOK_ICON}
                  />
                </Link>
              </PanelFooterBottomSocialMediaButtonContainer>
              <PanelFooterBottomSocialMediaButtonContainer>
                <Link href="/">
                  <PrimaryIcon
                    fill={COLORS.crete}
                    icon={IconsEnum.INSTAGRAM_ICON}
                  />
                </Link>
              </PanelFooterBottomSocialMediaButtonContainer>
              <PanelFooterBottomSocialMediaButtonContainer>
                <Link href="/">
                  <PrimaryIcon
                    fill={COLORS.crete}
                    icon={IconsEnum.WHATSAPP_ICON}
                  />
                </Link>
              </PanelFooterBottomSocialMediaButtonContainer>
            </PanelFooterBottomSocialMediaContainer>
          </PanelFooterBottomSocialMediaContainerHolder>
        </PanelFooterBottomContainer>
      </PanelFooterContainer>
    </HomeFooterHolder>
  );
};
