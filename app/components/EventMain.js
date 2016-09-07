var React = require('react');
var EventNavBar = require('./EventNavBar')
var MainPage = require('./MainPage')
var EventMain = React.createClass({

	render: function() {
		return (
			<div>
				<EventNavBar />
				<MainPage />
			</div>
		);
	}

});

module.exports = EventMain;