import React, { useState, createRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { list } from '../../assets/data';
import './styles.css';

export const VerticalList = () => {
	const [items, setItems] = useState(list);

	return (
		<div className='list_container'>
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
	);
};
