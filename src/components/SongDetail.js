import React from 'react';
import {connect} from 'react-redux';

const SongDetail = (props) => {
	// console.log('SongDetail Component props:  ', props);
	return <div>Song Detail</div>
}

const mapStateToProps = (state) => {
	// console.log('SongDetail mapStateToProps state:  ', state)

	return {song: state.selectedSong};
}

// Note: Not necessary to dispatch and effect Redux store,
//  so connect() will not need second argument
//  mapDispatchToProps property
export default connect(
	mapStateToProps
)(SongDetail);