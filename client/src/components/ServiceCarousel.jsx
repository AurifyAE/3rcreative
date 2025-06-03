import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Card from './Card';

const cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5'];

export default function ServiceCarousel() {

    return (
            <Swiper
            slidesPerView={1} // Default for mobile
            spaceBetween={2}
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
                    spaceBetween: 2,
                },
                // For desktop
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 1,
                },
            }}
            modules={[Autoplay]}
            className="p-2 w-screen -ml-4 sm:-ml-8 md:-ml-15"
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index} className="pt-8 sm:pt-12 md:pt-16 w-auto">
                        <div className="flex items-center justify-center">
                            <Card id={index} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
    );
};