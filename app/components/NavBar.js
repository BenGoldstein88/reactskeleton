var React = require('react');
// var HomeButton = require('./HomeButton');
// var CoupleButton = require('./CoupleButton');
// var SettingsButton = require('./SettingsButton');
var NavBarButtonContainer = require('../containers/NavBarButtonContainer');
var PropTypes = React.PropTypes;
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;


var NavBar = React.createClass({



	render: function() {

		return (
			<ButtonToolbar>
				<NavBarButtonContainer 
					label='home'
					bsStyles={this.props.bsStyles}/>
				<NavBarButtonContainer 
					label='couple'
					bsStyles={this.props.bsStyles}/>
				<NavBarButtonContainer 
					label='settings'
					bsStyles={this.props.bsStyles}/>
			</ButtonToolbar>
			);
	}

});

NavBar.propTypes = {
	bsStyles: PropTypes.object.isRequired
}

module.exports = NavBar;