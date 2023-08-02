import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { EffectCoverflow, Pagination } from "swiper/modules";
import useSWR from "swr";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App() {
  const router = useRouter();
  const { monumentId } = router.query;
  
  const { data, error } = useSWR("/api/monuments", fetcher);
  if (!data)
    return (
      <div>Loading...</div>
    );
  if (error) return <div>Failed to load, turn off the VPN</div>;

 

  const monument = data.find((entry) => {
    if (monumentId === entry.name) {
      return entry;
    } else {
      return;
    }
  });

console.log(monument.image);
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {/* data.map or .map ?*/}
        {monument.image.map((img, index) => (
          
          <SwiperSlide key={index} >
            <Image src={img} alt={monument.name} width={200} height={200} />
          </SwiperSlide>
        ))}
        
      </Swiper>
    </>
  );
}






// <SwiperSlide className="w-20 h-20">
// <Image
//   src="https://res.cloudinary.com/dvwnqprsp/image/upload/v1690963778/Podgaric/363729566_10159609424241818_7987272454068401613_n_htrlsc.jpg"
//   alt="image"
//   width={200}
//   height={200}
// />
// </SwiperSlide>
// <SwiperSlide className="w-20 h-20">
// <Image
//   src="https://res.cloudinary.com/dvwnqprsp/image/upload/v1690963778/Podgaric/361904938_10159609423466818_2219240934516324700_n_gsi1la.jpg"
//   alt="image"
//   width={200}
//   height={200}
// />
// </SwiperSlide>
// <SwiperSlide className="w-20 h-20">
// <Image
//   src="https://res.cloudinary.com/dvwnqprsp/image/upload/v1690963777/Podgaric/361672656_10159609424791818_7107340540189673299_n_zgzahc.jpg"
//   alt="image"
//   width={200}
//   height={200}
// />
// </SwiperSlide>
// <SwiperSlide className="w-20 h-20">
// <Image
//   src="https://res.cloudinary.com/dvwnqprsp/image/upload/v1690963777/Podgaric/295280429_2040892959440310_4545866595452677569_n_njnpbt.jpg"
//   alt="image"
//   width={200}
//   height={200}
// />
// </SwiperSlide>
// <SwiperSlide className="w-20 h-20">
// <Image
//   src="https://res.cloudinary.com/dvwnqprsp/image/upload/v1690909601/Podgaric/Spomenik_revoluciji-Podgaric_dzy4c9.jpg"
//   alt="image"
//   width={200}
//   height={200}
// />
// </SwiperSlide>
// <SwiperSlide className="w-20 h-20">
// <Image
//   src="https://swiperjs.com/demos/images/nature-7.jpg"
//   alt="image"
//   width={200}
//   height={200}
// />
// </SwiperSlide>
// <SwiperSlide className="w-20 h-20">
// <Image
//   src="https://swiperjs.com/demos/images/nature-8.jpg"
//   alt="image"
//   width={200}
//   height={200}
// />
// </SwiperSlide>
// <SwiperSlide className="w-20 h-20">
// <Image
//   src="https://swiperjs.com/demos/images/nature-9.jpg"
//   alt="image"
//   width={200}
//   height={200}
// />
// </SwiperSlide>