import React, { useEffect, useState, useRef } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import { CircleNumImage } from '../CircleNumImage';
import './styles.css';

export const Carusel = ({ images }) => {
	const [index, setIndex] = useState(0);
	const [addActive, setActive] = useState(true);
	const ref = useRef();
	//console.log('index=>', index);
	const numberOfImage = [];
	for (let i = 0; i < images.length; i++) {
		numberOfImage.push(i);
	}

	const prevHandler = () => {
		if (index > 0) {
			setIndex((prev) => prev - 1);
		}
	};

	const nextHandler = () => {
		if (index < images.length - 1) {
			setIndex((prev) => prev + 1);
		}
	};

	useEffect(() => {
		const handler = setTimeout(() => {
			//console.log('render:', index);
			setActive(true);
			if (index < images.length - 1) {
				setIndex((prev) => prev + 1);
			} else {
				setIndex(0);
			}
		}, 5000);

		return () => {
			clearTimeout(handler);
			setActive(false);
			//console.log('razmontirovan:', index);
		};
	}, [index, images.length]);

	return (
		<div className='general'>
			<div
				className='carusel_container'
				onMouseOver={(e) => console.log('stop carusel')}
				onMouseOut={(e) => console.log('start zanovo')}
				ref={ref}
			>
				<div className='carusel_arrow' onClick={prevHandler}>
					<FiChevronLeft size={30} />
				</div>
				<img src={images[index]} alt='foto' />
				<div className='carusel_arrow' onClick={nextHandler}>
					<FiChevronRight size={30} />
				</div>
			</div>
			<div className='wrapper_circle'>
				{images?.map((_, i) => {
					return <CircleNumImage key={i} index={i} currentIndex={index} />;
				})}
			</div>
		</div>
	);
};
