var React = require('react');
var Nav = require('react-bootstrap').Nav
var Navbar = require('react-bootstrap').Navbar
var NavItem = require('react-bootstrap').NavItem

var StitchNavBar = React.createClass({

	render: function() {
		return (
			<Navbar style={{'marginBottom': '0px'}}>
				<Navbar.Header>
					<Navbar.Brand>
						<a href='#'>Stitch</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<NavItem eventKey={1} href='#'>Settings</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}

});

module.exports = StitchNavBar;