import Carousel from "@/components/ui/Carousel";
import LazyImage from "@/components/ui/LazyImage";
import Spinner from "@/components/ui/Spinner";
import { useFetch } from "@/utils/movie";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
	Modal,
	ModalBody,
	ModalContent,
	useDisclosure,
} from "@nextui-org/react";
import ReactPlayer from "react-player";

const Videos: React.FC = () => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [videoId, setVideoId] = useState("");
	const { movieId } = useParams();
	const { data, isLoading, isError } = useFetch(`movie/${movieId}/videos`);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			<h1 className="font-bold mb-5 text-2xl">Trailer</h1>
			<Carousel>
				{data.results.map((video: any) => (
					<div key={video.id}>
						<div
							className="cursor-pointer"
							onClick={() => {
								setVideoId(video.key);
								onOpen();
							}}
						>
							{video.key === null ? (
								<LazyImage src={`/no-image.svg`} alt="" />
							) : (
								<LazyImage
									src={`https://i.ytimg.com/vi/${video.key}/mqdefault.jpg`}
									alt={video.name}
								/>
							)}
						</div>
						<p>{video.name}</p>
					</div>
				))}
			</Carousel>
			<VideoModal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				videoId={videoId}
			/>
		</>
	);
};

export default Videos;

const VideoModal: React.FC<{
	videoId: string;
	isOpen: boolean;
	onOpenChange: () => void;
}> = ({ videoId, isOpen, onOpenChange }) => {
	return (
		<Modal
			size="2xl"
			backdrop={"blur"}
			isOpen={isOpen}
			onOpenChange={onOpenChange}
		>
			<ModalContent>
				<ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} />
			</ModalContent>
		</Modal>
	);
};

import React from "react";
