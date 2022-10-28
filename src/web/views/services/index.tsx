import { Divider } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { COLORS } from "../../../../utils/colors";
import { PrimaryButton } from "../../components/PrimaryButton";
import {
  ServicesPageHolder,
  TitleServicesPage,
  ServicesContainer,
  ServicesDescription,
  ServicesContainerIconAndText,
  ServicesTitle,
  HolderServicesText,
  ServicesContainerIconAndTextReverse,
} from "./styles";

const paisagismIcon = "/icons/paisagism.svg";
const podeIcon = "/icons/pruning.svg";
const plantingIcon = "/icons/planting.svg";
const garderingIcon = "/icons/gardering.svg";
const project3dIcon = "/icons/3d-project.svg";
const brokeLine: string = "%0A";

export const ServicesPage = () => {
  const router = useRouter();
  function wppTextPaisagism() {
    router.push(
      `https://api.whatsapp.com/send?phone=5531982738657&text=😀 Olá,${brokeLine}Vim pelo site e gostaria de solicitar um orçamento do serviço de *Paisagismo*.`
    );
  }

  function wppTextPoda() {
    router.push(
      `https://api.whatsapp.com/send?phone=5531982738657&text=😀 Olá,${brokeLine}Vim pelo site e gostaria de solicitar um orçamento do serviço de *Poda*.`
    );
  }

  function wppTextPlantio() {
    router.push(
      `https://api.whatsapp.com/send?phone=5531982738657&text=😀 Olá,${brokeLine}Vim pelo site e gostaria de solicitar um orçamento do serviço de *Plantio*.`
    );
  }

  function wppTextJardinagem() {
    router.push(
      `https://api.whatsapp.com/send?phone=5531982738657&text=😀 Olá,${brokeLine}Vim pelo site e gostaria de solicitar um orçamento do serviço de *Jardinagem*.`
    );
  }

  function wppTextPojeto3d() {
    router.push(
      `https://api.whatsapp.com/send?phone=5531982738657&text=😀 Olá,${brokeLine}Vim pelo site e gostaria de solicitar um orçamento do serviço de *Projeto 3D personalizado*.`
    );
  }
  return (
    <ServicesPageHolder>
      <TitleServicesPage>SERVIÇOS</TitleServicesPage>
      <ServicesContainer>
        <ServicesContainerIconAndText>
          <HolderServicesText>
            <ServicesTitle>Paisagismo</ServicesTitle>
            <ServicesDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et
              sapien ipsum. Donec id turpis dignissim, pulvinar justo in,
              pellentesque ipsum. Cras malesuada leo id luctus tincidunt. Fusce
              nisl leo, sodales eu risus in, cursus venenatis augue. Sed
              tincidunt dolor vel euismod ultrices. Duis sit amet pretium
              tellus. Suspendisse bibendum elementum justo et molestie. Sed non
              imperdiet dui. Vivamus sed ex neque.
            </ServicesDescription>
            <PrimaryButton
              onClick={wppTextPaisagism}
              text="Solicitar Orçamento"
            />
          </HolderServicesText>
          <Image
            src={paisagismIcon}
            alt="serviceIcon"
            width={350}
            height={350}
          ></Image>
        </ServicesContainerIconAndText>
      </ServicesContainer>
      <Divider
        style={{
          backgroundColor: `${COLORS.celtic}`,
          width: "100%",
          height: "2px",
        }}
      />
      <ServicesContainer>
        <ServicesContainerIconAndTextReverse>
          <Image
            src={podeIcon}
            alt="serviceIcon"
            width={350}
            height={350}
          ></Image>
          <HolderServicesText>
            <ServicesTitle>Podas</ServicesTitle>
            <ServicesDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et
              sapien ipsum. Donec id turpis dignissim, pulvinar justo in,
              pellentesque ipsum. Cras malesuada leo id luctus tincidunt. Fusce
              nisl leo, sodales eu risus in, cursus venenatis augue. Sed
              tincidunt dolor vel euismod ultrices. Duis sit amet pretium
              tellus. Suspendisse bibendum elementum justo et molestie. Sed non
              imperdiet dui. Vivamus sed ex neque.
            </ServicesDescription>
            <PrimaryButton onClick={wppTextPoda} text="Solicitar Orçamento" />
          </HolderServicesText>
        </ServicesContainerIconAndTextReverse>
      </ServicesContainer>
      <Divider
        style={{
          backgroundColor: `${COLORS.celtic}`,
          width: "100%",
          height: "2px",
        }}
      />
      <ServicesContainer>
        <ServicesContainerIconAndText>
          <HolderServicesText>
            <ServicesTitle>Plantio De Grama</ServicesTitle>
            <ServicesDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et
              sapien ipsum. Donec id turpis dignissim, pulvinar justo in,
              pellentesque ipsum. Cras malesuada leo id luctus tincidunt. Fusce
              nisl leo, sodales eu risus in, cursus venenatis augue. Sed
              tincidunt dolor vel euismod ultrices. Duis sit amet pretium
              tellus. Suspendisse bibendum elementum justo et molestie. Sed non
              imperdiet dui. Vivamus sed ex neque.
            </ServicesDescription>
            <PrimaryButton
              onClick={wppTextPlantio}
              text="Solicitar Orçamento"
            />
          </HolderServicesText>
          <Image
            src={plantingIcon}
            alt="serviceIcon"
            width={350}
            height={350}
          ></Image>
        </ServicesContainerIconAndText>
      </ServicesContainer>
      <Divider
        style={{
          backgroundColor: `${COLORS.celtic}`,
          width: "100%",
          height: "2px",
        }}
      />
      <ServicesContainer>
        <ServicesContainerIconAndTextReverse>
          <Image
            src={garderingIcon}
            alt="serviceIcon"
            width={350}
            height={350}
          ></Image>
          <HolderServicesText>
            <ServicesTitle>Jardinagem</ServicesTitle>
            <ServicesDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et
              sapien ipsum. Donec id turpis dignissim, pulvinar justo in,
              pellentesque ipsum. Cras malesuada leo id luctus tincidunt. Fusce
              nisl leo, sodales eu risus in, cursus venenatis augue. Sed
              tincidunt dolor vel euismod ultrices. Duis sit amet pretium
              tellus. Suspendisse bibendum elementum justo et molestie. Sed non
              imperdiet dui. Vivamus sed ex neque.
            </ServicesDescription>
            <PrimaryButton
              onClick={wppTextJardinagem}
              text="Solicitar Orçamento"
            />
          </HolderServicesText>
        </ServicesContainerIconAndTextReverse>
      </ServicesContainer>
      <Divider
        style={{
          backgroundColor: `${COLORS.celtic}`,
          width: "100%",
          height: "2px",
        }}
      />
      <ServicesContainer>
        <ServicesContainerIconAndText>
          <HolderServicesText>
            <ServicesTitle>Projeto 3D Personalizado</ServicesTitle>
            <ServicesDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et
              sapien ipsum. Donec id turpis dignissim, pulvinar justo in,
              pellentesque ipsum. Cras malesuada leo id luctus tincidunt. Fusce
              nisl leo, sodales eu risus in, cursus venenatis augue. Sed
              tincidunt dolor vel euismod ultrices. Duis sit amet pretium
              tellus. Suspendisse bibendum elementum justo et molestie. Sed non
              imperdiet dui. Vivamus sed ex neque.
            </ServicesDescription>
            <PrimaryButton
              onClick={wppTextPojeto3d}
              text="Solicitar Orçamento"
            />
          </HolderServicesText>
          <Image
            src={project3dIcon}
            alt="serviceIcon"
            width={350}
            height={350}
          ></Image>
        </ServicesContainerIconAndText>
      </ServicesContainer>
    </ServicesPageHolder>
  );
};
