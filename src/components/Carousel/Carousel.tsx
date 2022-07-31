import React, { useState, useEffect, useRef } from "react";
import { CarouselItemType } from "../../types/components.type";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Card from "./Card";
import "./Carousel.scss";

type Props = {
  section: string;
  carouselItems: CarouselItemType[];
  setImageContent: React.Dispatch<React.SetStateAction<CarouselItemType>>;
};

const Carousel: React.FC<Props> = ({
  section,
  carouselItems,
  setImageContent,
}) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const isDisabled = (direction: string) => {
    if (direction === "prev") return currentIndex <= 0;

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  return (
    <div className="carousel">
      <div className="carousel_container">
        <div className="carousel_buttons">
          <button
            onClick={movePrev}
            className="carousel_buttons_arrow cursor-pointer"
            disabled={isDisabled("prev")}
          >
            <ArrowBackIosIcon className="carousel_buttons_arrow_icon" />
          </button>
          <button
            onClick={moveNext}
            className="carousel_buttons_arrow cursor-pointer"
            disabled={isDisabled("next")}
          >
            <ArrowForwardIosIcon className="carousel_buttons_arrow_icon" />
          </button>
        </div>
        <div ref={carousel} className="carousel_cards">
          {carouselItems.map((item) => {
            return (
              <Card
                section={section}
                key={item.idx}
                item={item}
                setImageContent={setImageContent}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
