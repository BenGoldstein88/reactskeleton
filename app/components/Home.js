var React = require('react');
var NavBarTopContainer = require('../containers/NavBarTopContainer');
var Nav = require('react-bootstrap').Nav
var Navbar = require('react-bootstrap').Navbar
var NavItem = require('react-bootstrap').NavItem
var StitchNavBar = require('./StitchNavBar')
var AppMain = require('./AppMain')
// var PropTypes = React.PropTypes;


var Home = React.createClass({

	getInitialState: function() {
		return {
			display: 'home' 
		};
	},
	setDisplay: function(display) {
		this.setState({
			display: display
		})
	},
	handleSelect: function(eventKey) {
		this.setState({
			display:'home'
		})
	},
	render: function() {
		return (
			<div style={{
				height: '100%'
			}}>
				<StitchNavBar onSelect={this.handleSelect} display={this.state.display}/>
				<AppMain setDisplay={this.setDisplay} display={this.state.display}/>
			</div>
		);
	}

});

				// <NavBarTopContainer />


module.exports = Home;