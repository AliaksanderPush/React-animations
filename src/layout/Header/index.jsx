import React, { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import './styles.css';

export const Header = () => {
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
			<VscAzure size={40} />
			<nav ref={navRef}>
				<a href='/#'>Home</a>
				<a href='/#'>VironIt</a>
				<a href='/#'>Blog</a>
				<a href='/#'>About</a>
			</nav>
			<button className='nav-btn nav-close-btn' onClick={showNavbar}>
				{changeIcon ? <FaTimes /> : <FaBars />}
			</button>
		</header>
	);
};
/*
	<button className='nav-btn nav-close-btn' onClick={showNavbar}>
					{changeIcon ? <FaTimes /> : <FaBars />}
				</button>
				*/
