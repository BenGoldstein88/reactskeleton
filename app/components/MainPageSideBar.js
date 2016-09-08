var React = require('react');
var SiteMapIcon = require('./SiteMapIcon')
var RemindersBox = require('./RemindersBox')
var SuggestionsBox = require('./SuggestionsBox')

var MainPageSideBar = React.createClass({

	render: function() {
		return (
			<div className='col-sm-3' style={{
				height: '100%',
				border: '1px solid black'
			}}>
				<SiteMapIcon />
				<RemindersBox />
				<SuggestionsBox />
			</div>	
		);
	}

});

module.exports = MainPageSideBar;