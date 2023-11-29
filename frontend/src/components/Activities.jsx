import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import swiper1 from '/assets/img/swiper1.png';
import swiper2 from '/assets/img/swiper2.png';
import swiper3 from '/assets/img/swiper3.png';
import swiper4 from '/assets/img/swiper4.png';

function Activities() {
    const [slidesPerView, setSlidesPerView] = useState(4);
    const isMobile = useMediaQuery({ maxWidth: 425 });
    const isMedium = useMediaQuery({ minWidth: 426, maxWidth: 1023 });

    useEffect(() => {
        if (isMobile) {
            setSlidesPerView(1)
          } else if (isMedium) {
            setSlidesPerView(2)
          } else {
            setSlidesPerView(4)
            return
          }
    }, [isMobile, isMedium]);

    return (
        <div className="mx-4 sm:mx-12">
            <div className="w-full border-b-2 border-b-cafe">
                <h2 className="w-5/6 px-4 py-2 text-2xl md:text-4xl text-blanc font-semibold uppercase bg-cafe">
                    Nos domaines d activités
                </h2>
            </div>
            <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={slidesPerView}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="my-8"
                >
                <SwiperSlide>
                    <div className="border border-cafe text-center">
                        <img src={swiper1} alt="Swiper" className="w-full" />
                        <p className="text-noir text-md my-2">Bâtiments et travaux publiques</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border border-cafe text-center">
                        <img src={swiper2} alt="Swiper" className="w-full" />
                        <p className="text-noir text-md my-2">Revêtement des pistes et pavés</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border border-cafe text-center">
                        <img src={swiper3} alt="Swiper" className="w-full" />
                        <p className="text-noir text-md my-2">Hydraulique villageoise</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border border-cafe text-center">
                        <img src={swiper4} alt="Swiper" className="w-full" />
                        <p className="text-noir text-md my-2">Hôtelerie, Bar et Restaurant</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Activities;
