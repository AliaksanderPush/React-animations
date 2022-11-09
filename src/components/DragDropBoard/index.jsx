import React, { useCallback, useEffect, useRef } from 'react';
import bron from '../../assets/img/bron.png';
import bonus from '../../assets/img/bonus.png';
import shoes from '../../assets/img/shoes.png';
import dilivery from '../../assets/img/dilivery.png';
import './styles.css';

const pictures = [shoes, dilivery, bonus, bron];

export const DragDropBoard = () => {
	const refParent = useRef();
	let mousePrevLeft = 0;
	let mousePrevTop = 0;
	let currentImg;

	const getElementPos = (el) => {
		const bbox = el.getBoundingClientRect();
		return {
			left: bbox.left + window.pageXOffset,
			top: bbox.top + window.pageYOffset,
		};
	};

	const imageMouseDown = (e) => {
		e.preventDefault();
		currentImg = e.target;
		mousePrevLeft = e.pageX;
		mousePrevTop = e.pageY;
		refParent.current.append(currentImg);
		currentImg.style.cursor = 'grabbing';
		window.addEventListener('mousemove', imageMouseMove);
	};

	const imageMouseMove = (e) => {
		e.preventDefault();
		const mouseLeft = e.pageX - mousePrevLeft;
		const mouseTop = e.pageY - mousePrevTop;
		const position = getElementPos(currentImg);
		currentImg.style.left = position.left + mouseLeft + 'px';
		currentImg.style.top = position.top + mouseTop + 'px';
		mousePrevLeft = e.pageX;
		mousePrevTop = e.pageY;
	};

	const imageMouseUp = (e) => {
		e.preventDefault();
		currentImg.style.cursor = 'auto';
		window.removeEventListener('mousemove', imageMouseMove);
	};

	const imageStart = useCallback(() => {
		const images = refParent.current.childNodes;
		images.forEach((image) => {
			const pos = getElementPos(image);
			image.style.left = pos.left + 'px';
			image.style.top = pos.top + 'px';
		});
		images.forEach((image) => (image.style.position = 'absolute'));
	}, []);

	useEffect(() => {
		imageStart();
	}, [imageStart]);

	return (
		<div className='board_container'>
			<h2>Наши преемущества</h2>
			<div className='drag_drop_board' ref={refParent}>
				{pictures?.map((item) => {
					return (
						<img
							key={item}
							src={item}
							alt='ie'
							onMouseDown={(e) => imageMouseDown(e)}
							onMouseUp={(e) => imageMouseUp(e)}
						/>
					);
				})}
			</div>
		</div>
	);
};
