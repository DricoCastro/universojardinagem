import { HomeBanner } from "./components/homeBanner";
import { HomeTypesOfServices } from "./components/homeMiddleScreen";
import { HomeHolder } from "./styles";

export const HomePage = () => {
  return (
    <HomeHolder>
      <HomeBanner />
      <HomeTypesOfServices />
    </HomeHolder>
  );
};
