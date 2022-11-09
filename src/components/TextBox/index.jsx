import React, { useCallback, useEffect, useRef, useState } from 'react';
import unsplash from '../../assets/img/unsplash.png';
import unsplash2 from '../../assets/img/unsplash2.png';
import { text, text2, text3 } from '../../assets/data';
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

	const hideText = () => {
		let className = 'text_item';
		if (isAnimation) {
			className = 'text_item _anime';
		}
		return className;
	};

	useEffect(() => {
		window.addEventListener('scroll', animOnScroll);
		if ('ontouchmove' in window) {
			window.addEventListener('touchmove', animOnScroll);
		}
		return () => window.removeEventListener('scroll', animOnScroll);
	}, [animOnScroll]);

	const textAnime = hideText();
	return (
		<div className='text_box_container'>
			<div className='image_box'>
				<div className='first_image'>
					<img src={unsplash} alt='splash1' />
				</div>
				<div className='second_image'>
					<img src={unsplash2} alt='splash2' />
				</div>
			</div>
			<div className='text_box'>
				<h2>новая коллекция</h2>
				<span>осень-зима 2022/23</span>
				<div className={!isAnimation ? 'text_content' : 'text_content _anime'}>
					<p className={textAnime} ref={textRef}>
						{text}
					</p>
					<p className={textAnime}>{text2}</p>
					<p className={textAnime}>{text3}</p>
				</div>
			</div>
		</div>
	);
};

/*

<div className={!isAnimation ? 'text_content' : 'text_content _anime'}>
				<p className={!isAnimation ? 'text_item' : 'text_item _anime'} ref={textRef}>
					{text}
				</p>
			</div>

			*/
