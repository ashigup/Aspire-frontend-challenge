import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../card/Card";
import "./CardSlider.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";

const settings = {
  dots: true,
  dotsClass: "slick-dots",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const CardSlider = () => {
  const {cards } = useSelector((state: RootState) => state.cards);

  return (
    <>
      <div className="slider">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <Card
              key={card.number}
              name={card.name}
              number={card.number}
              isFreezed={card.isFreezed}
              expiry={card.expiry}
            />
          ))}
        </Slider>
        <div className="side-card"></div>
      </div>
    </>
  );
};

export default CardSlider;
