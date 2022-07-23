import React, { useState, useEffect, useRef } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Card from "./Card";
import "./Carousel.scss";

export type CarouselItemType = {
  idx: number;
  title: string;
  imageName: string;
};

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
      <div className="carousel-container">
        <div className="carousel-buttons">
          <button
            onClick={movePrev}
            className="carousel-buttons-arrow"
            disabled={isDisabled("prev")}
          >
            <ArrowBackIosIcon className="carousel-buttons-icon" />
          </button>
          <button
            onClick={moveNext}
            className="carousel-buttons-arrow"
            disabled={isDisabled("next")}
          >
            <ArrowForwardIosIcon className="carousel-buttons-icon" />
          </button>
        </div>
        <div ref={carousel} className="carousel-card">
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
