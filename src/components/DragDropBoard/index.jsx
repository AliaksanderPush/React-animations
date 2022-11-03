import React, { useRef } from 'react';
import { pictures } from '../../assets/data';
import './styles.css';

export const DragDropBoard = () => {
	const refElem = useRef();
	let mousePrevLeft = 0;
	let mousePrevTop = 0;
	let currentImg;

	const refCallback = (el) => {
		if (el) {
			const pos = getElementPos(el);
			el.style.left = pos.left + 'px';
			el.style.top = pos.top + 'px';
			addPosition(el);
		}
	};

	const addPosition = (elem) => {
		elem.style.position = 'absolute';
	};

	function getElementPos(el) {
		const bbox = el.getBoundingClientRect();
		return {
			left: bbox.left + window.pageXOffset,
			top: bbox.top + window.pageYOffset,
		};
	}

	const imageMouseDown = (e) => {
		console.log('mouseDown=>', e.target);
		e.preventDefault();
		currentImg = e.target;
		mousePrevLeft = e.pageX;
		mousePrevTop = e.pageY;
		console.log('body=>', refElem);
		refElem.current.append(currentImg);
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

	return (
		<div className='drag_drop_board' ref={refElem}>
			{pictures?.map((item) => {
				return (
					<img
						key={item}
						src={item}
						alt='ie'
						ref={refCallback}
						onMouseDown={(e) => imageMouseDown(e)}
						onMouseUp={(e) => imageMouseUp(e)}
					/>
				);
			})}
		</div>
	);
};
