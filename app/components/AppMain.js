var React = require('react');
var AppNavBar = require('./AppNavBar')
var EventMain = require('./EventMain')
var AppMain = React.createClass({

	render: function() {
		return (
			<div>
				<AppNavBar />
				<EventMain />
			</div>
		);
	}

});

module.exports = AppMain;