var React = require('react');
var NavBarTopContainer = require('../containers/NavBarTopContainer');
var Nav = require('react-bootstrap').Nav
var Navbar = require('react-bootstrap').Navbar
var NavItem = require('react-bootstrap').NavItem
var StitchNavBar = require('./StitchNavBar')
var AppMain = require('./AppMain')
// var PropTypes = React.PropTypes;


var Home = React.createClass({

	render: function() {
		return (
			<div>
				<StitchNavBar />
				<AppMain />

				<NavBarTopContainer />
			</div>
		);
	}

});



module.exports = Home;