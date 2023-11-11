import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
	children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		swipeToSlide: true,
		arrow: true,
	};
	return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
