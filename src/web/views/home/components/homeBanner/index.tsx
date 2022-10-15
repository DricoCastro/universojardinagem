import { PrimaryButton } from "../../../../components/PrimaryButton";
import {
  Blur,
  CardMiddleTexts,
  DescriptionCardTop,
  EventBannerStyle,
  HolderButton,
  SubTitleCardTop,
  TitleCardTop,
} from "./styles";

const ImageBackground = "/images/homeBackground.jpg";

export const HomeBanner = () => {
  function InProgress() {
    alert("Em Progresso");
  }

  return (
    <EventBannerStyle url={ImageBackground}>
      <Blur>
        <CardMiddleTexts>
          <TitleCardTop>
            Nós Cuidamos do Seu Jardim <br /> Do Plantio à Manutenção
          </TitleCardTop>
          <SubTitleCardTop>
            Nosso time de profissionais em diversas disciplinas garantem
            performance e qualidade ao seu projeto.
          </SubTitleCardTop>
          <DescriptionCardTop>
            Que um jardim e muito mais que só plantas e vida e que podemos mudar
            um ambiente deixá-lo mais agradável (MELHORAR ESTILO OUTBACK CITANDO
            OS SERVIÇOS PRESTADOS...) Clique no botão e simule agora um
            orçamento. É rápido, vai levar só um minutinho !
          </DescriptionCardTop>
          <HolderButton>
            <PrimaryButton
              onClick={InProgress}
              text="Confira nossos trabalhos"
            />
          </HolderButton>
        </CardMiddleTexts>
      </Blur>
    </EventBannerStyle>
  );
};
