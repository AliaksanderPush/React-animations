import React, { useCallback, useEffect, useRef, useState } from 'react';
import { text } from '../../assets/data';
import './styles.css';

export const TextBox = () => {
	const [isAnimation, setIsAnimation] = useState(false);
	const textRef = useRef();

	const animOnScroll = useCallback(() => {
		const animItem = textRef.current;
		const animItemHeight = animItem.offsetHeight;
		const animItemOffset = getElementPos(animItem).top;
		const animStart = 5;

		let animItemPoint = window.innerHeight - animItemHeight / animStart;

		if (animItemHeight > window.innerHeight) {
			animItemPoint = window.innerHeight - window.innerHeight / animStart;
		}

		if (
			window.pageYOffset > animItemOffset - animItemPoint &&
			window.pageYOffset < animItemOffset + animItemHeight
		) {
			setIsAnimation(true);
		} else {
			setIsAnimation(false);
		}
	}, []);

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
	}, [animOnScroll]);

	return (
		<div className='text_box_container'>
			<div className={!isAnimation ? 'text_content' : 'text_content _anime'}>
				<p className={!isAnimation ? 'text_item' : 'text_item _anime'} ref={textRef}>
					{text}
				</p>
			</div>
		</div>
	);
};
