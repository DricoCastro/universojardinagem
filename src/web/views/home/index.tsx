import { HomeBanner } from "./components/homeBanner";
import { FaqSection } from "./components/homeFaqSection";
import { HomeTypesOfServices } from "./components/homeMiddleScreen";
import { HomeHolder } from "./styles";

export const HomePage = () => {
  return (
    <HomeHolder>
      <HomeBanner />
      <HomeTypesOfServices />
      <FaqSection />
    </HomeHolder>
  );
};
