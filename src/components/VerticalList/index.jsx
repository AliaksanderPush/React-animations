import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { list } from '../../assets/data';
import Rectangle5 from '../../assets/img/Rectangle5.png';
import './styles.css';

export const VerticalList = () => {
	const [items, setItems] = useState(list);

	return (
		<div className='list_container'>
			<div className='list_block'>
				<TransitionGroup>
					{items?.map(({ id, text, nodeRef }) => (
						<CSSTransition key={id} nodeRef={nodeRef} timeout={700} classNames='item'>
							<div ref={nodeRef}>
								<button
									className='remove-btn'
									onClick={() => setItems((items) => items.filter((item) => item.id !== id))}
								>
									&times;
								</button>
								<span>{text}</span>
							</div>
						</CSSTransition>
					))}
				</TransitionGroup>
			</div>
			<div className='image_block '>
				<img src={Rectangle5} alt='dsd' />
			</div>
		</div>
	);
};
