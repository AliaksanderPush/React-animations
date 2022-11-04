import React from 'react';
import { Header } from './layout/Header';
import { Ticker } from './components/Ticker';
import { Carusel } from './components/Carusel';
import { DragDropBoard } from './components/DragDropBoard';
import { VerticalList } from './components/VerticalList';
import { TextBox } from './components/TextBox';
import { images } from './assets/data';

function App() {
	return (
		<>
			<Header />
			<Ticker
				text={
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo velit numquam maiores dicta quia ullam! In, ea non ratione exercitationem delectus aliquam dignissimos fugit reprehenderit perferendis error laboriosam accusamus atque.'
				}
			/>
			<Carusel images={images} />
			<TextBox />
			<DragDropBoard />
			<VerticalList />
		</>
	);
}

export default App;
