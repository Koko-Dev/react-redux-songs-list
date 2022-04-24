import React, { Component } from 'react';
import { connect } from "react-redux";

// Note:  Component === React.Component
class SongList extends Component {
	render() {
		return (
			<div>SongList</div>
		)
	}
}

// Note: state will be all of our data inside of redux store,
//  i.e. list of songs from reducer/ songsReducer and
//  selected song from reducer/ selectedSongReducer
const mapStateToProps = (state) => {
	console.log(state);
	return state;
}

export default connect(mapStateToProps)(SongList);