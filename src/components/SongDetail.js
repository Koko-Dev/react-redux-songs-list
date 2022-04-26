import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({ song }) => {
	if(!song) {
		return <div>Select a Song</div>
	}

	return <div>{song.title}</div>;
}

const mapStateToProps = (state) => {
	console.log('SongDetail mapStateToProps state:  ', state)
	return {song: state.selectedSong};
}

// Note: Not necessary to dispatch and effect Redux store,
//  so connect() will not need second argument
//  mapDispatchToProps property
export default connect(
	mapStateToProps
)(SongDetail);