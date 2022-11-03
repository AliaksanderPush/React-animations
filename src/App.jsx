import React from 'react';
import { Header } from './layout/Header';
import { Ticker } from './components/Ticker';
import { Carusel } from './components/Carusel';
import { DragDropBoard } from './components/DragDropBoard';
import { images } from './assets/data';

function App() {
	return (
		<>
			<Header />
			<Ticker text={'hello Word!'} />
			<Carusel images={images} />
			<DragDropBoard />
		</>
	);
}

export default App;
