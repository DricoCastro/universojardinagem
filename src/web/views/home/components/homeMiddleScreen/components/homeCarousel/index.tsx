import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import services from "./data";
import styles from "./StylesArrow.module.css";
import clsx from "clsx";

import {
  HolderCarousel,
  PageHolder,
  HolderCard,
  Card,
  CardTitle,
  HolderImage,
} from "./styles";
import Image from "next/image";

export default function ServicesCategories() {
  const servicesInfo = services.map((service, i) => (
    <HolderCard key={i}>
      <Card>
        <HolderImage>
          <Image
            width={250}
            height={250}
            style={{ borderRadius: "10px" }}
            src={service.image}
            alt="serviceImage"
          />
        </HolderImage>
        <CardTitle>{service.title}</CardTitle>
      </Card>
    </HolderCard>
  ));

  function NextArrow(props: any) {
    const { className, style, onClick } = props;
    const thisClassName = clsx(className, styles.arrows);
    return <div className={thisClassName} style={style} onClick={onClick} />;
  }

  function PreviousArrow(props: any) {
    const { className, style, onClick } = props;
    const thisClassName = clsx(className, styles.arrows);
    return <div className={thisClassName} style={style} onClick={onClick} />;
  }

  function Carousel() {
    const configCarousel = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PreviousArrow />,
      responsive: [
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 499,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <HolderCarousel>
        <Slider {...configCarousel}>{servicesInfo}</Slider>
      </HolderCarousel>
    );
  }

  return (
    <PageHolder>
      <Carousel />
    </PageHolder>
  );
}
