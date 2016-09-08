var React = require('react');
var MainPageSideBar = require('./MainPageSidebar')
var MainPageDisplay = require('./MainPageDisplay')
var PropTypes = React.PropTypes;

var MainPage = React.createClass({


	render: function() {
		return (
			<div>
				<MainPageSideBar />
				<MainPageDisplay display={this.props.display}/>
			</div>
		);
	}

});

MainPage.propTypes = {
	display: PropTypes.string.isRequired
}

module.exports = MainPage;