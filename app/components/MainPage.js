var React = require('react');
var MainPageSideBar = require('./MainPageSidebar')
var MainPageDisplay = require('./MainPageDisplay')

var MainPage = React.createClass({

	render: function() {
		return (
			<div>
				<MainPageSideBar className='col-sm-3'/>
				<MainPageDisplay className='col-sm-9'/>
			</div>
		);
	}

});

module.exports = MainPage;