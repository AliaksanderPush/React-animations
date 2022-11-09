import React from 'react';
import { Header } from './layout/Header';
import { Ticker } from './components/Ticker';
import { Carusel } from './components/Carusel';
import { DragDropBoard } from './components/DragDropBoard';
import { VerticalList } from './components/VerticalList';
import { TextBox } from './components/TextBox';

function App() {
	return (
		<>
			<Header />
			<Ticker />
			<Carusel />
			<TextBox />
			<DragDropBoard />
			<VerticalList />
		</>
	);
}

export default App;
