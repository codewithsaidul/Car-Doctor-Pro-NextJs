import Image from "next/image";
import React from "react";

const Banners = [
  {
    id: "slide1",
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide2",
    prev: "#slide6",
  },
  {
    id: "slide2",
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    id: "slide3",
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    id: "slide4",
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide5",
    prev: "#slide3",
  },
  {
    id: "slide5",
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide6",
    prev: "#slide4",
  },
  {
    id: "slide6",
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide1",
    prev: "#slide5",
  },
];

const Hero = () => {
  return (
    <div>
      <div className="carousel w-full">
        {Banners.map((banner, index) => (
          <div
            key={index}
            id={banner.id}
            style={{
                backgroundImage: `linear-gradient(45deg, rgba(7, 25, 82, 0.7), rgba(0, 0, 0, 0.3)), url(/assets/images/banner/${index+1}.jpg)`,
            }}
            className="carousel-item p-10 relative w-full min-h-[calc(100vh-70px)] bg-top bg-no-repeat bg-cover"
          >
            <div className="hero__content">
              <h1 className="hero__title">{banner.title}</h1>
              <p className="hero__description">{banner.description}</p>

              <div className="hero__btn-group">
                <button className="hero__btn">Discover More</button>
                <button className="hero__btn-outline">Latest Project</button>
              </div>
            </div>
            <div className="caro__btn-group">
              <a href={banner.prev} className="slide__btn">
                ❮
              </a>
              <a href={banner.next} className="slide__btn">
                ❯
              </a>
            </div>
          </div>

          
        ))}
      </div>
    </div>
  );
};

export default Hero;
