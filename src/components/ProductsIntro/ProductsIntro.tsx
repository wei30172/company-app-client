import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import { CarouselItemType } from "../Carousel/Carousel";

import "./ProductsIntro.scss";

const carouselItems: CarouselItemType[] = [
  {
    idx: 1,
    title: "Cosmetic cream jars",
    imageName: "product1.jpg",
  },
  {
    idx: 2,
    title: "Natural skincare cosmetic products",
    imageName: "product2.jpg",
  },
  {
    idx: 3,
    title: "Natural cosmetics products",
    imageName: "product3.jpg",
  },
  {
    idx: 4,
    title: "Green pump dispenser bottles",
    imageName: "product4.jpg",
  },
  {
    idx: 5,
    title: "Natural shampoo",
    imageName: "product5.jpg",
  },
  {
    idx: 6,
    title: "Zero waste cosmetic products",
    imageName: "product6.jpg",
  },
  {
    idx: 7,
    title: "Body lotion",
    imageName: "product7.jpg",
  },
  {
    idx: 8,
    title: "Natural moisturizer face cream",
    imageName: "product8.jpg",
  },
];

type Ref = HTMLDivElement;
type Props = {};

const ProductsIntro = React.forwardRef<Ref, Props>((props, ref) => {
  const [imageContent, setImageContent] = useState(carouselItems[0]);
  return (
    <div ref={ref} className="products-intro">
      <div className="products-intro_container">
        <div className="products-intro_content">
          <div>
            <p className="products-intro_content_title">Our Products</p>
            <p className="products-intro_content_paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
              <Link to={"/products"}>
                <span className="products-intro_content_paragraph_more cursor-pointer">
                  Buy Now...
                </span>
              </Link>
            </p>
          </div>
          <div>
            <img
              className="products-intro_content_image shadow-lg"
              src={require(`../../assets/products/${imageContent.imageName}`)}
              alt="products"
            />
            <p className="products-intro_content_image-description">
              {imageContent.title}
            </p>
          </div>
        </div>
        <Carousel
          section="products"
          carouselItems={carouselItems}
          setImageContent={setImageContent}
        />
      </div>
    </div>
  );
});

export default ProductsIntro;
