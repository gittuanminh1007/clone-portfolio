import React from 'react';
import Lottie from 'react-lottie';

type Props = {
	animationPath: string;
};

export default function GreetingLottie({ animationPath }: Props) {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		path: animationPath,
	};

	return (
		<div onClick={() => null}>
			{/* @ts-ignore */}
			<Lottie options={defaultOptions} />
		</div>
	);
}
