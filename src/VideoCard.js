import React, { forwardRef } from 'react';
import './VideoCard.css';
import TextTruncate from 'react-text-truncate';
import { ThumbUpSharp } from '@material-ui/icons';
const base_url = 'https://image.tmdb.org/t/p/original/';

const VideoCard = forwardRef(({ movie }, ref) => {
	return (
		<div ref={ref} className="videoCard">
			<img
				className="videoCard__img"
				src={`${base_url}${movie.backdrop_path || movie?.poster_path}`}
				alt={movie?.id}
			/>
			<TextTruncate
				line={3}
				element="p"
				truncateText="..."
				text={movie.overview}
			/>
			<h1>{movie?.title || movie?.original_name}</h1>
			<p className="videoCard_stats">
				{movie.media_type && `${movie.media_type}`}
				<p>{movie.release_date || movie.first_air_date}</p>

				<div>
					<ThumbUpSharp />
					{movie.vote_count}
				</div>
			</p>
		</div>
	);
});

export default VideoCard;
