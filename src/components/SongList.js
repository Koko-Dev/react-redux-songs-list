import React, { Component } from 'react';
import { connect } from "react-redux";

// Note:  Component === React.Component
class SongList extends Component {
	render() {
		console.log(this.props);
		return (
			<div>SongList</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);