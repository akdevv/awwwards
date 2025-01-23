import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function AnimatedTitle({ title, containerClass }) {
	const containerRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const titleAnimation = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "100 bottom",
					end: "center bottom",
					toggleActions: "play none none reverse",
				},
			});

			titleAnimation.to(".animated-word", {
				opacity: 1,
				transform: "translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)",
				ease: "power2.inOut",
				stagger: 0.02,
			});
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<div
			ref={containerRef}
			className={`
				animated-title
				${containerClass}
			`}
		>
			{title.split("<br>").map((line, index) => (
				<div
					key={index}
					className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
				>
					{line.split(" ").map((word, idx) => {
						if (word.includes("<b>")) {
							const [before, letter, after] =
								word.split(/<b>|<\/b>/);
							return (
								<span key={idx} className="animated-word">
									{before}
									<span className="special-font animated-word">
										{letter}
									</span>
									{after}
								</span>
							);
						}
						return (
							<span key={idx} className="animated-word">
								{word}
							</span>
						);
					})}
				</div>
			))}
		</div>
	);
}
