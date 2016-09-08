var React = require('react');
var MainPageSideBar = require('./MainPageSidebar')
var MainPageDisplay = require('./MainPageDisplay')

var MainPage = React.createClass({

	render: function() {
		return (
			<div>
				<MainPageSideBar />
				<MainPageDisplay />
			</div>
		);
	}

});

module.exports = MainPage;