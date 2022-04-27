import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({ song }) => {
	if(!song) {
		return <div>Select a Song</div>;
	}

	return (
		<div>
			<h3>Details for: </h3>
			<p>
				Title: {song.title} <br/>
				Duration: {song.duration}
			</p>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {song: state.selectedSong};
}

// Note: Not necessary to dispatch and effect Redux store,
//  so connect() will not need second argument
//  mapDispatchToProps property
export default connect(
	mapStateToProps
)(SongDetail);