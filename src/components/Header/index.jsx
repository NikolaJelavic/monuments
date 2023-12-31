import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Images = [
  {
    id: 1,
    src: "/img/monuments/nikola-majksner-as_pS7EkK-Y-unsplash.jpg",
    alt: "Tjentiste",
  },
  {
    id: 2,
    src: "/img/monuments/ali-nuredini-ZxrGyZSnA2c-unsplash.jpg",
    alt: "Krusevo",
  },
  {
    id: 3,
    src: "/img/monuments/nikola-duza-2cjlsFTG7z0-unsplash.jpg",
    alt: "Kosmaj1",
  },
  {
    id: 4,
    src: "/img/monuments/kosmaj2.jpg",
    alt: "Kosmaj2",
  },
  {
    id: 5,
    src: "/img/monuments/milan-bosancic-Lpb1k99m_ZI-unsplash.jpg",
    alt: "Bubanj",
  },
  {
    id: 6,
    src: "/img/monuments/dusan-osmokrovic-Bf09O0a7vEo-unsplash.jpg",
    alt: "KosmajAbove",
  },
  {
    id: 7,
    src: "/img/monuments/podgaric1.jpg",
    alt: "PodgaricFront",
  },
  {
    id: 8,
    src: "/img/monuments/podgaric2.jpg",
    alt: "PodgaricCloseUp",
  },
  {
    id: 9,
    src: "/img/monuments/nenad-radojcic-ViYwvzGL4ik-unsplash.jpg",
    alt: "KosmajWinter",
  },
  {
    id: 10,
    src: "/img/monuments/SfRJugoslaviaFb.jpg",
    alt: "Kadinjaca",
  },
  {
    id: 11,
    src: "/img/monuments/valentin-salja-vloixE7hUgc-unsplash.jpg",
    alt: "Jajinci",
  },
  {
    id: 12,
    src: "/img/monuments/andrea-music-OSWuDinSI90-unsplash.jpg",
    alt: "Jasenovac",
  },
];

const settings = {
  arrows: false,
  infinite: true,
  speed: 10000, // Adjust the speed to control how fast the carousel moves
  slidesToShow: 3, // The number of items visible at once in the carousel
  // slidesToScroll: 1, // The number of items to scroll when clicking the navigation buttons
  autoplay: true,
  autoplaySpeed: 1000, // Set autoplaySpeed to 0 to disable automatic scrolling
  cssEase: "linear", // Use linear easing for smoother continuous movement
  variableWidth: true, // Set to true if you want the items to take up variable width

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        variableWidth: false,
        centerMode: false,
      },
    },
  ],
};

// lg 1024px       md 768px        sm 640px

export default function App() {
  return (
    <>
      {/* watchSlidesProgress={true} */}
      <div slidesperview={9} className="max-w-8xl mx-auto">
        <Slider {...settings}>
          {Images.map((item) => (
            <div key={item.id} className=" object-cover ">
              <Image
                src={item.src}
                alt={item.alt}
                width={200}
                height={200}
                style={{ marginRight: 0, paddingRight: 0 }}
                className="h-28 md:h-40 w-60 -mb-2"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}