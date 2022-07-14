import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";
import { CarouselItemType } from "../Carousel/Carousel";

import "./about.scss";

const carouselItems: CarouselItemType[] = [
  {
    idx: 1,
    title: "Søren (COO/founder) and Sara, (CEO/founder) bench testing",
    imageName: "carousel1.png",
  },
  {
    idx: 2,
    title: "Brian (VP of R&D) testing Q-Pad strips",
    imageName: "carousel2.png",
  },
  {
    idx: 3,
    title: "Sara, Angela (Investor) and Søren",
    imageName: "carousel3.png",
  },
  {
    idx: 4,
    title: "Production facility in Milan, Italy",
    imageName: "carousel4.png",
  },
  {
    idx: 5,
    title: "Fatima at the American Diabetes Association Tour de Cure",
    imageName: "carousel5.png",
  },
  {
    idx: 6,
    title: "Christian (VP of Admin), Søren and Sara after hike",
    imageName: "carousel6.png",
  },
  {
    idx: 7,
    title: "Søren, Bill (advisor) and Sara",
    imageName: "carousel7.png",
  },
  {
    idx: 8,
    title: "Søren, Bill (advisor) and Sara",
    imageName: "carousel8.png",
  },
  {
    idx: 9,
    title: "Scalable manufacturing of Q-Pads",
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
              By using Qvin, you’re actively helping our healthcare system
              understand women's’ bodies and craft care that positively impacts
              lives for the generations to come.
            </p>
            <p className="about_content_paragraph">
              We know that together, we can change the world. At Qvin, you will
              make an impact on the future of women’s health and carve your path
              as a leader, innovator, and change-maker.
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
