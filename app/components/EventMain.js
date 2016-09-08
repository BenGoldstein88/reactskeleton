var React = require('react');
var EventNavBar = require('./EventNavBar')
var MainPage = require('./MainPage')
var PropTypes = React.PropTypes

var EventMain = React.createClass({

	render: function() {
		return (
			<div>
				<EventNavBar />
				<MainPage display={this.props.display}/>
			</div>
		);
	}

});

EventMain.propTypes = {
	display: PropTypes.string.isRequired
}

module.exports = EventMain;