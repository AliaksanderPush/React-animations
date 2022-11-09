import React, { Children, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { Logo } from '../../components/UI/Logo';
import './styles.css';

export const Header = ({ children }) => {
	const navRef = useRef();
	const [changeIcon, setChangeIcon] = useState(true);
	const showNavbar = () => {
		let isClose = navRef.current.classList.contains('responsive_nav');
		setTimeout(() => {
			setChangeIcon(!isClose);
		}, 700);

		navRef.current.classList.toggle('responsive_nav');
	};

	return (
		<header>
			<Logo />
			<nav ref={navRef}>
				<a href='/#'>Хит продаж</a>
				<a href='/#'>Каталог</a>
				<a href='/#'>Контакты</a>
				<a href='/#'>О бренде</a>
			</nav>
			<button className='nav-btn nav-close-btn' onClick={showNavbar}>
				{changeIcon ? <FaTimes /> : <FaBars />}
			</button>
		</header>
	);
};
