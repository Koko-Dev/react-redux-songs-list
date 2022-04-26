import React, {Component} from 'react';
import {connect} from "react-redux";
import {selectSong} from '../actions';

// Note:  Component === React.Component
class SongList extends Component {
	renderList() {
		console.log('SongList renderList() method -  this.props:  ', this.props);
		return this.props.songs.map((song) => {
			return (
				<div className="item"
				     key={song.title}>
					<div className="right floated content">
						<button className="ui button primary"
						        onClick={() => this.props.selectSong(song)}>
							Select
						</button>
					</div>
					<div className="content">{song.title}</div>
				</div>
			);
		})
	}

	render() {
		console.log('SongList Component render() this.props:  ', this.props);
		return (
			<div className="ui divided list">{this.renderList()}</div>
		)
	}
}

// Note: When we click on select button, mapStateToProps() rerenders
const mapStateToProps = (state) => {
	console.log('SongList mapStateToProps state - {songs: state.songs}:  ', state)
	return {songs: state.songs};
}

// Note: selectSong is our action creator - actions/index.js
//  - which returns the type and payload - song
// Important: In order to UPDATE Redux store we need to dispatch an action creator;
//  connect()'s second argument is the mapDispatchToProps property and
//  we are setting its value to the action creator selectSong from actions/index.js
export default connect(
	mapStateToProps,
	{selectSong: selectSong}
)(SongList);