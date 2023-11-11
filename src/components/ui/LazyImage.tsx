import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

interface LazyImageProps {
	src?: string;
	alt?: string;
	className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className }) => {
	return (
		<div>
			<LazyLoadImage src={src} className={className} alt={alt} effect="blur" />
		</div>
	);
};

export default LazyImage;
