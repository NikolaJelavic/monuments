import Image from "next/image"


// export default function Header() {
//                                                    // lg 1024px       md 768px        sm 640px
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

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function App() {
  return (
    
    
      <Swiper watchSlidesProgress={true} slidesPerView={9} className="mySwiper">
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
       
        <SwiperSlide><Image src={"/img/monuments/Podgaric/podgaric.jpg"} alt="podgaric" width={200} height={200} className="h-40 w-60"/></SwiperSlide>
        <SwiperSlide><Image src={"/img/monuments/Kosmaj/kosmaj.png"} alt="kosmaj" width={200} height={200} className="h-40 w-60"/></SwiperSlide>
        <SwiperSlide><Image src={"/img/monuments/Tjentiste/Tjentiste.png"} alt="tjentiste" width={200} height={200} className="h-40 w-60"/></SwiperSlide>
        <SwiperSlide><Image src={"/img/monuments/Ilirska Bistrica/ilirskaBistrica.png"} alt="ilirskaBistrica" width={200} height={200} className="h-40 w-60" /></SwiperSlide>
        <SwiperSlide><Image src={"/img/monuments/Sisak/sisak.png"} alt="sisak" width={200} height={200} className="h-40 w-60"/></SwiperSlide>
        <SwiperSlide><Image src={"/img/monuments/Lepoglava/lepoglava.jpg"} alt="lepoglava" width={200} height={200} className="h-40 w-60"/></SwiperSlide>
        <SwiperSlide><Image src={"/img/monuments/Kozara/kozara.png"} alt="kozara" width={200} height={200} className="h-40 w-60"/></SwiperSlide>
        <SwiperSlide><Image src={"/img/monuments/Kragujevac/sumarice.jpg"} alt="sumarice" width={200} height={200} className="h-40 w-60"/></SwiperSlide>
        <SwiperSlide><Image src={"/img/monuments/Botun/botun.jpg"} alt="botun" width={200} height={200} className="h-40 w-60"/></SwiperSlide>
        <SwiperSlide><Image src={"/img/monuments/Belcista/belcista.jpg"} alt="belcista" width={200} height={200} className="h-40 w-60"/></SwiperSlide>
        <SwiperSlide><Image src={"/img/monuments/Lukovdol/lukovDol.jpg"} alt="lukovdol" width={200} height={200} className="h-40 w-60"/></SwiperSlide>
        <SwiperSlide><Image src={"/img/monuments/Jasenovac/jasenovac.png"} alt="jasenovac" width={200} height={200} className="h-40 w-60" /></SwiperSlide>
        <SwiperSlide><Image src={"/img/monuments/Obadov Brijeg/obadovBrijeg1.jpg"} alt="obadov brijeg" width={200} height={200} className="h-40 w-60" /></SwiperSlide>
       
        <SwiperSlide><Image src={"/img/monuments/Podgaric/podgaric.jpg"} alt="podgaric" width={200} height={200} className="h-40 w-60"/></SwiperSlide>
        <SwiperSlide><Image src={"/img/monuments/Kosmaj/kosmaj.png"} alt="kosmaj" width={200} height={200} className="h-40 w-60"/></SwiperSlide>
        <SwiperSlide><Image src={"/img/monuments/Tjentiste/Tjentiste.png"} alt="tjentiste" width={200} height={200} className="h-40 w-60"/></SwiperSlide>
        <SwiperSlide><Image src={"/img/monuments/Ilirska Bistrica/ilirskaBistrica.png"} alt="ilirskaBistrica" width={200} height={200} className="h-40 w-60" /></SwiperSlide>
        <SwiperSlide><Image src={"/img/monuments/Sisak/sisak.png"} alt="sisak" width={200} height={200} className="h-40 w-60"/></SwiperSlide>
        <SwiperSlide><Image src={"/img/monuments/Lepoglava/lepoglava.jpg"} alt="lepoglava" width={200} height={200} className="h-40 w-60"/></SwiperSlide>
        <SwiperSlide><Image src={"/img/monuments/Kozara/kozara.png"} alt="kozara" width={200} height={200} className="h-40 w-60"/></SwiperSlide>
        <SwiperSlide><Image src={"/img/monuments/Kragujevac/sumarice.jpg"} alt="sumarice" width={200} height={200} className="h-40 w-60"/></SwiperSlide>
        <SwiperSlide><Image src={"/img/monuments/Botun/botun.jpg"} alt="botun" width={200} height={200} className="h-40 w-60"/></SwiperSlide>
        <SwiperSlide><Image src={"/img/monuments/Belcista/belcista.jpg"} alt="belcista" width={200} height={200} className="h-40 w-60"/></SwiperSlide>
        <SwiperSlide><Image src={"/img/monuments/Lukovdol/lukovDol.jpg"} alt="lukovdol" width={200} height={200} className="h-40 w-60"/></SwiperSlide>
        <SwiperSlide><Image src={"/img/monuments/Jasenovac/jasenovac.png"} alt="jasenovac" width={200} height={200} className="h-40 w-60" /></SwiperSlide>
        <SwiperSlide><Image src={"/img/monuments/Obadov Brijeg/obadovBrijeg1.jpg"} alt="obadov brijeg" width={200} height={200} className="h-40 w-60" /></SwiperSlide>
        
      </Swiper>
   
  );
}
