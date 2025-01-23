import { useState } from "react";

export default function Hero() {
	const [currentIndex, setCurrentIndex] = useState(1);
	const [hasClicked, setHasClicked] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [loadedVideos, setLoadedVideos] = useState(0);

	const totalVideos = 4;

	const handleMiniVdClick = () => {};

	return (
		<div className="relative h-dvh w-screen overflow-x-hidden">
			<div
				id="video-frame"
				className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
			>
				<div className="mask-clip-path absolut-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg"></div>
			</div>
		</div>
	);
}
