import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Results from './Results';
import request from './result';

function App() {
	const [selectedOption, setSelctedOption] = useState(request.fetchTrending);
	return (
		<div className="app">
			<Header />
			<Nav setSelctedOption={setSelctedOption} />
			<Results selectedOption={selectedOption} />
		</div>
	);
}

export default App;
