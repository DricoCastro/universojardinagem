import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  FaqDescription,
  FaqSectionHolder,
  FaqTitle,
  EventBannerStyle,
  TitleFaqScreen,
  HolderTitleFaqScreen,
} from "./styles";

const ImageBackground = "/images/faq-background.jpg";

export const FaqSection = () => {
  return (
    <EventBannerStyle url={ImageBackground}>
      <FaqSectionHolder>
        <HolderTitleFaqScreen>
          <TitleFaqScreen>
            Perguntas <a>frequentes</a> feitas <br /> por nossos clientes
          </TitleFaqScreen>
        </HolderTitleFaqScreen>
        <Accordion style={{ width: "100%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="primary" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <FaqTitle>Fazem poda de arvores ?</FaqTitle>
          </AccordionSummary>
          <AccordionDetails>
            <FaqDescription>
              Sim, realizamos o serviço de poda de vegetação com equipe
              especializada.
            </FaqDescription>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: "100%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="primary" />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <FaqTitle>Recuperam área degradada?</FaqTitle>
          </AccordionSummary>
          <AccordionDetails>
            <FaqDescription>
              Fornecemos o serviço completo de recuperação de vegetação em área
              degradada.
            </FaqDescription>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: "100%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="primary" />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <FaqTitle>Realizam plantio de reflorestamento?</FaqTitle>
          </AccordionSummary>
          <AccordionDetails>
            <FaqDescription>
              Temos equipe completa para realizar o manejo e plantio de mudas de
              reflorestamento.
            </FaqDescription>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: "100%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="primary" />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <FaqTitle>Só quero comprar as mudas, vocês vendem?</FaqTitle>
          </AccordionSummary>
          <AccordionDetails>
            <FaqDescription>
              Vendemos sim! Mande uma mensagem informando as espécies e
              quantidades desejadas.
            </FaqDescription>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: "100%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="primary" />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <FaqTitle>
              Como contratar os serviços do Paisagismo Alma Verde?
            </FaqTitle>
          </AccordionSummary>
          <AccordionDetails>
            <FaqDescription>
              É muito simples! Entre em contato com a nossa equipe, faremos uma
              avaliação detalhada para oferecer o melhor serviço com a maior
              relação custo/benefício do mercado.
            </FaqDescription>
          </AccordionDetails>
        </Accordion>
      </FaqSectionHolder>
    </EventBannerStyle>
  );
};
