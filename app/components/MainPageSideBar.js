var React = require('react');
var SiteMapIcon = require('./SiteMapIcon')
var RemindersBox = require('./RemindersBox')
var SuggestionsBox = require('./SuggestionsBox')

var MainPageSideBar = React.createClass({

	render: function() {
		return (
			<div className='col-sm-3'>
				<SiteMapIcon />
				<RemindersBox />
				<SuggestionsBox />
			</div>	
		);
	}

});

module.exports = MainPageSideBar;