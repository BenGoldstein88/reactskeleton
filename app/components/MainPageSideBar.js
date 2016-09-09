var React = require('react');
var SiteMapIcon = require('./SiteMapIcon')
var RemindersBox = require('./RemindersBox')
var SuggestionsBox = require('./SuggestionsBox')
var PropTypes = React.PropTypes

var MainPageSideBar = React.createClass({

	render: function() {
		return (
			<div className='col-sm-3' style={{
				height: '100%',
				border: '1px solid black'
			}}>
				<SiteMapIcon onVenuesClick={this.props.onVenuesClick} />
				<RemindersBox />
				<SuggestionsBox />
			</div>	
		);
	}

});

MainPageSideBar.propTypes = {
	onVenuesClick: PropTypes.func.isRequired
}

module.exports = MainPageSideBar;