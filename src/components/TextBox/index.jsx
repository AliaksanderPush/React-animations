import React, { useEffect, useRef } from 'react';
import { text } from '../../assets/data';
import './styles.css';

export const TextBox = () => {
	const textRef = useRef();

	const animOnScroll = () => {
		const animations = textRef.current;
		console.log('animItem1=>', animations.length);
		for (let i = 0; i < animations.length; i++) {
			const animItem = animations[i];

			console.log('animItem=>', animItem);

			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = getElementPos(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if (
				window.pageYOffset > animItemOffset - animItemPoint &&
				window.pageYOffset < animItemOffset + animItemHeight
			) {
				animItem.classList.add('anime');
			} else {
				if (!animItem.classList.contains('anim-no-hide')) {
					animItem.classList.remove('anime');
				}
			}
		}
	};

	const getElementPos = (elem) => {
		const bbox = elem.getBoundingClientRect();
		let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {
			left: bbox.left + scrollLeft,
			top: bbox.top + scrollTop,
		};
	};

	useEffect(() => {
		window.addEventListener('scroll', animOnScroll);
		if ('ontouchmove' in window) {
			window.addEventListener('touchmove', animOnScroll);
		}
		return () => window.removeEventListener('scroll', animOnScroll);
	}, []);

	return (
		<div className='text_box_container'>
			<div className='text_content' ref={textRef}>
				<p>{text}</p>
			</div>
		</div>
	);
};
