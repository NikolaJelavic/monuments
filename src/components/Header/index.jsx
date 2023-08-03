import Image from "next/image"
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
   
},{
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
  speed: 8000, // Adjust the speed to control how fast the carousel moves
  slidesToShow: 3, // The number of items visible at once in the carousel
  // slidesToScroll: 1, // The number of items to scroll when clicking the navigation buttons
  autoplay: true,
  autoplaySpeed: 0, // Set autoplaySpeed to 0 to disable automatic scrolling
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
        <div  slidesperview={9} className="max-w-8xl mx-auto">
          <Slider {...settings}>
            {Images.map((item) => (
              <div key={item.id} className=" object-cover ">
                <Image src={item.src} alt={item.alt} width={200} height={200} style={{ marginRight: 0, paddingRight: 0 }} className="h-40 w-60 -mb-2" /> 
              </div>
            ))}
          </Slider>
        </div>
      </>
  );
}




// export default function Header() {
  //                                                    
  //     return(
    //         <div className="flex">
    //             <Image src={"/img/monuments/Podgaric/podgaric.jpg"} alt="podgaric" width={500} height={500} className="sm:w-1/4 md:w-1/12 lg:w-1/12  h-20"/>
    //             <Image src={"/img/monuments/Kosmaj/kosmaj.png"} alt="kosmaj" width={500} height={500} className="sm:w-1/4 md:w-1/12 lg:w-1/12  h-20"/>
    //             <Image src={"/img/monuments/Tjentiste/Tjentiste.png"} alt="tjentiste" width={500} height={500} className="sm:w-1/4 md:w-1/12 lg:w-1/12  h-20"/>
    //             <Image src={"/img/monuments/Ilirska Bistrica/ilirskaBistrica.png"} width={500} height={500} className="sm:w-1/4 md:w-1/12 lg:w-1/12  h-20" alt="ilirskaBistrica"/>
    //             <Image src={"/img/monuments/Sisak/sisak.png"} alt="sisak" width={500} height={500} className="hidden sm:block md:w-1/12 lg:w-1/12  h-20"/>
    //             <Image src={"/img/monuments/Lepoglava/lepoglava.jpg"} alt="lepoglava" width={500} height={500} className="hidden sm:block md:w-1/12 lg:w-1/12  h-20"/>
    //             <Image src={"/img/monuments/Kozara/kozara.png"} alt="kozara" width={500} height={500} className="hidden sm:block md:w-1/12 lg:w-1/12  h-20"/>
//             <Image src={"/img/monuments/Kragujevac/sumarice.jpg"} alt="sumarice" width={500} height={500} className="hidden sm:block md:w-1/12 lg:w-1/12  h-20"/>
//             <Image src={"/img/monuments/Botun/botun.jpg"} alt="botun" width={500} height={500} className="hidden sm:block md:w-1/12 lg:w-1/12  h-20"/>
//             <Image src={"/img/monuments/Belcista/belcista.jpg"} alt="belcista" width={500} height={500} className="hidden sm:block md:w-1/12 lg:w-1/12  h-20"/>
//             <Image src={"/img/monuments/Lukovdol/lukovDol.jpg"} alt="lukovdol" width={500} height={500} className="hidden sm:block md:w-1/12 lg:w-1/12  h-20"/>
//             <Image src={"/img/monuments/Obadov Brijeg/obadovBrijeg1.jpg"} width={500} height={500} className="hidden sm:block md:w-1/12 lg:w-1/12  h-20" alt="obadov brijeg"/>
//         </div>
//             )
//         };