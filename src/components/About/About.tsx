import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";
import { CarouselItemType } from "../Carousel/Carousel";

import "./About.scss";

const carouselItems: CarouselItemType[] = [
  {
    idx: 1,
    title: "Bench Testing",
    imageName: "carousel1.png",
  },
  {
    idx: 2,
    title: "COO/founder and CEO/founder",
    imageName: "carousel2.png",
  },
  {
    idx: 3,
    title: "Investor and CEO/founder",
    imageName: "carousel3.png",
  },
  {
    idx: 4,
    title: "Production Facility",
    imageName: "carousel4.png",
  },
  {
    idx: 5,
    title: "American Diabetes Association Tour",
    imageName: "carousel5.png",
  },
  {
    idx: 6,
    title: "Startup Meetup",
    imageName: "carousel6.png",
  },
  {
    idx: 7,
    title: "Our Office",
    imageName: "carousel7.png",
  },
  {
    idx: 8,
    title: "Marketing Activity",
    imageName: "carousel8.png",
  },
  {
    idx: 9,
    title: "Our Products",
    imageName: "carousel9.png",
  },
];

type Ref = HTMLDivElement;
type Props = {};

const About = React.forwardRef<Ref, Props>((props, ref) => {
  const [imageContent, setImageContent] = useState(carouselItems[0]);
  return (
    <div ref={ref} className="about">
      <div className="about_container">
        <div className="about_content">
          <div>
            <p className="about_content_paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="about_content_paragraph">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div>
            <img
              className="about_content_image shadow-lg"
              src={require(`../../assets/carousel/${imageContent.imageName}`)}
              alt="carousel"
            />
            <p className="about_content_image-description">
              {imageContent.title}
            </p>
          </div>
        </div>
        <Carousel
          carouselItems={carouselItems}
          setImageContent={setImageContent}
        />
      </div>
    </div>
  );
});

export default About;
