var React = require('react');
var MainPageSideBar = require('./MainPageSidebar')
var MainPageDisplay = require('./MainPageDisplay')
var PropTypes = React.PropTypes;

var MainPage = React.createClass({

	handleVenuesClick: function(e) {
		this.props.setDisplay('venues')
	},

	render: function() {
		return (
			<div>
				<MainPageSideBar onVenuesClick={this.handleVenuesClick} />
				<MainPageDisplay setEvent={this.props.setEvent} event={this.props.event} setDisplay={this.props.setDisplay} display={this.props.display}/>
			</div>
		);
	}

});

MainPage.propTypes = {
	display: PropTypes.string.isRequired,
	event: PropTypes.string.isRequired,
	setDisplay: PropTypes.func.isRequired,
	setEvent: PropTypes.func.isRequired
}

module.exports = MainPage;