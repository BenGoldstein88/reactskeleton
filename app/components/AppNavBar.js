var React = require('react');
var Nav = require('react-bootstrap').Nav
var Navbar = require('react-bootstrap').Navbar
var NavItem = require('react-bootstrap').NavItem

var AppNavBar = React.createClass({

	render: function() {
		return (
			<Navbar style={{'marginBottom': '0px'}}>
				<Navbar.Collapse>
					<Nav>
						<NavItem eventKey={1} href='#'>Checklist </NavItem>
						<NavItem eventKey={2} href='#'>Budget </NavItem>
						<NavItem eventKey={3} href='#'>Timeline </NavItem>
						<NavItem eventKey={4} href='#'>Guest List </NavItem>
						<NavItem eventKey={5} href='#'>Reminders </NavItem>
						<NavItem eventKey={6} href='#'>Seating Chart </NavItem>

					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}

});

module.exports = AppNavBar;