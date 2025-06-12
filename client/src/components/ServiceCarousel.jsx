import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Card from './Card';
import cardsData from '../data/cardsData';


export default function ServiceCarousel() {
    return (
        <Swiper
            slidesPerView={1} // Default for mobile
            spaceBetween={20}
            loop={true}
            speed={5000}
            autoplay={{
                delay: 0,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
            }}
            breakpoints={{
                // For tablet
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                // For desktop
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            }}
            modules={[Autoplay]}
            className="w-full"
        >
            {cardsData.map((card) => (
                <SwiperSlide key={card.id} className="pt-8 sm:pt-12 md:pt-16">
                    <div className="flex items-center justify-center">
                        <Card card={card} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}