import { Divider } from "@mui/material";
import Image from "next/image";
import { COLORS } from "../../../../utils/colors";
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

export const ServicesPage = () => {
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
