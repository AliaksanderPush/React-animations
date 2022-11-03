import React, { useEffect, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import { CircleNumImage } from '../CircleNumImage';
import './styles.css';

export const Carusel = ({ images }) => {
	const [index, setIndex] = useState(1);
	const [stopCarusel, setStopCarusel] = useState(true);

	const defineIndex = (n, length) => {
		let result = n % length;
		return result >= 0 ? result : result + length;
	};

	const handleClassName = (i) => {
		const indexLeft = defineIndex(index - 1, images.length);
		const indexRight = defineIndex(index + 1, images.length);

		let className = 'image';
		if (i === index) {
			className = 'image image_active';
		} else if (i === indexRight) {
			className = 'image image_right';
		} else if (i === indexLeft) {
			className = 'image image_left';
		} else className = 'image';
		return className;
	};

	const chooseImage = (i) => {
		setStopCarusel(false);
		setIndex(i);
	};

	const prevHandler = () => {
		setStopCarusel(false);
		if (index > 0) {
			decIndex();
		}
	};

	const nextHandler = () => {
		setStopCarusel(false);
		if (index < images.length - 1) {
			incIndex();
		}
	};

	const incIndex = () => {
		setIndex((prev) => prev + 1);
	};

	const decIndex = () => {
		setIndex((prev) => prev - 1);
	};

	useEffect(() => {
		if (stopCarusel) {
			const handler = setTimeout(() => {
				if (index < images.length - 1) {
					incIndex();
				} else {
					setIndex(0);
				}
			}, 5000);
			return () => {
				clearTimeout(handler);
			};
		}
	}, [index, images.length, stopCarusel]);

	useEffect(() => {
		if (!stopCarusel) {
			const handler = setTimeout(() => setStopCarusel(true), 7000);
			return () => clearTimeout(handler);
		}
	}, [stopCarusel]);

	return (
		<div className='carusel_container'>
			<div className='carousel'>
				{images.map((item, i) => {
					const className = handleClassName(i);
					return <img key={item} className={className} src={item} alt='is' />;
				})}
			</div>
			<div className='circle_container'>
				<div className='carusel_arrow' onClick={prevHandler}>
					<FiChevronLeft size={30} />
				</div>
				{images.map((_, i) => {
					return (
						<CircleNumImage
							index={i}
							currentIndex={index}
							onClick={() => chooseImage(i)}
						/>
					);
				})}
				<div className='carusel_arrow' onClick={nextHandler}>
					<FiChevronRight size={30} />
				</div>
			</div>
		</div>
	);
};
