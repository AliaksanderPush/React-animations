import React from 'react';
import './styles.css';

export const CircleNumImage = ({ index, currentIndex, onClick }) => {
	return (
		<div
			className='circle_item'
			onClick={onClick}
			style={{ backgroundColor: index === currentIndex ? '#DE6D25' : '#d9d2d2' }}
		></div>
	);
};
