import React, { useState } from 'react';
import './styles.css';

export const Ticker = ({ text }) => {
	const [moving, setMoving] = useState(true);

	return (
		<div className='container'>
			<div className='ticket' onClick={() => setMoving(!moving)}>
				<span style={{ animationPlayState: moving ? 'running' : 'paused' }}>
					Комфорт в каждой паре
				</span>
			</div>
		</div>
	);
};
