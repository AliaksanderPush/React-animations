import React from 'react';
import './styles.css';

export const CircleNumImage = ({ index, currentIndex }) => {
	return (
		<div
			className='circle_item'
			style={{ backgroundColor: index === currentIndex ? '#787878' : '#d9d2d2' }}
		></div>
	);
};
