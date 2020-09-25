import React from 'react';
import './Nav.css';
import request from './result';

const Nav = ({ setSelctedOption }) => {
	return (
		<div className="nav">
			<h2 onClick={() => setSelctedOption(request.fetchTrending)}>Trending</h2>
			<h2 onClick={() => setSelctedOption(request.fetchTopRated)}>Top Rated</h2>
			<h2 onClick={() => setSelctedOption(request.fetchActionMovies)}>
				Action
			</h2>
			<h2 onClick={() => setSelctedOption(request.fetchComedyMovies)}>
				Comedy
			</h2>
			<h2 onClick={() => setSelctedOption(request.fetchHorrorMovies)}>
				Horrow
			</h2>
			<h2 onClick={() => setSelctedOption(request.fetchRomanceMovies)}>
				Romance
			</h2>
			<h2 onClick={() => setSelctedOption(request.fetchMystery)}>Mysery</h2>
			<h2 onClick={() => setSelctedOption(request.fetchSciFi)}>Sci-Fi</h2>
			<h2 onClick={() => setSelctedOption(request.fetchWestern)}>Western</h2>
			<h2 onClick={() => setSelctedOption(request.fetchAnimation)}>
				Animation
			</h2>
			<h2 onClick={() => setSelctedOption(request.fetchTv)}>Tv Movie</h2>
		</div>
	);
};

export default Nav;
