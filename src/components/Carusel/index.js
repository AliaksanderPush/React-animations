import React, { useEffect, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import './styles.css';

export const Carusel = ({ images }) => {
	const [index, setIndex] = useState(0);

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

	console.log('set=>', index);

	return (
		<div className='general'>
			<div className='carusel_container'>
				<div className='carusel_arrow' onClick={prevHandler}>
					<FiChevronLeft size={30} />
				</div>
				<img src={images[index]} alt='foto' />
				<div className='carusel_arrow' onClick={nextHandler}>
					<FiChevronRight size={30} />
				</div>
			</div>
		</div>
	);
};
