import React from "react";
import { CarouselItemType } from "./Carousel";

import "./Card.scss";

type Props = {
  section: string;
  item: CarouselItemType;
  setImageContent: React.Dispatch<React.SetStateAction<CarouselItemType>>;
};

const Card: React.FC<Props> = ({ section, item, setImageContent }) => {
  return (
    <div className="carousel_item">
      <div className="carousel_item_image-container">
        <img
          src={require(`../../assets/${section}/${item.imageName}`)}
          alt={item.title}
          className="carousel_item_image"
        />
      </div>
      <div
        onClick={() => setImageContent(item)}
        className="carousel_item_text-container cursor-pointer"
      >
        <h3 className="carousel_item_text">{item.title}</h3>
      </div>
    </div>
  );
};

export default Card;
