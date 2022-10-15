import Image from "next/image";
import {
  HolderCards,
  Card,
  DivImg,
  HolderCardsFirstLine,
  HolderCardsSecondLine,
  TitleService,
  CardPlantioWeb,
  CardPlantioMobile,
  HolderCardsPlantioMobile,
} from "./styles";
const paisagismImg = "/images/services_imgs/paisagismo.jpg";
const jardinagemImg = "/images/services_imgs/jardinagem_alt.jpg";
const plantioImg = "/images/services_imgs/plantio.jpg";
const podaImg = "/images/services_imgs/poda.jpg";
const projetoImg = "/images/services_imgs/projeto_3d.jpg";
function inProgress() {
  alert("Em Contrução");
}
export const CardServices = () => {
  return (
    <HolderCards>
      <HolderCardsFirstLine>
        <Card onClick={inProgress}>
          <Image
            style={{
              borderRadius: "50%",
            }}
            alt="serviceImg"
            src={paisagismImg}
            width={150}
            height={150}
          />
          <TitleService>Paisagismo</TitleService>
        </Card>
        <Card onClick={inProgress}>
          <Image
            style={{
              borderRadius: "50%",
            }}
            alt="serviceImg"
            src={jardinagemImg}
            width={150}
            height={150}
          />
          <TitleService>Jardinagem</TitleService>
        </Card>
        <CardPlantioWeb onClick={inProgress}>
          <Image
            style={{
              borderRadius: "50%",
            }}
            alt="serviceImg"
            src={plantioImg}
            width={150}
            height={150}
          />
          <TitleService>Plantio</TitleService>
        </CardPlantioWeb>
      </HolderCardsFirstLine>
      <HolderCardsSecondLine>
        <Card onClick={inProgress}>
          <Image
            style={{
              borderRadius: "50%",
            }}
            alt="serviceImg"
            src={podaImg}
            width={150}
            height={150}
          />
          <TitleService>Poda</TitleService>
        </Card>
        <Card onClick={inProgress}>
          <Image
            style={{
              borderRadius: "50%",
            }}
            alt="serviceImg"
            src={projetoImg}
            width={150}
            height={150}
          />
          <TitleService>Projeto 3D</TitleService>
        </Card>
      </HolderCardsSecondLine>
      <HolderCardsPlantioMobile>
        <CardPlantioMobile onClick={inProgress}>
          <Image
            style={{
              borderRadius: "50%",
            }}
            alt="serviceImg"
            src={plantioImg}
            width={150}
            height={150}
          />
          <TitleService>Plantio</TitleService>
        </CardPlantioMobile>
      </HolderCardsPlantioMobile>
    </HolderCards>
  );
};
