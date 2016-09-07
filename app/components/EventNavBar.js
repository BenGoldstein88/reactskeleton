var React = require('react');
var Nav = require('react-bootstrap').Nav
var Navbar = require('react-bootstrap').Navbar
var NavItem = require('react-bootstrap').NavItem

var EventNavBar = React.createClass({

	render: function() {
		return (
			<Navbar style={{'marginBottom': '0px'}}>
				<Navbar.Collapse>
					<Nav>
						<NavItem eventKey={1} href='#'>Rehearsal </NavItem>
						<NavItem eventKey={2} href='#'>Wedding </NavItem>
						<NavItem eventKey={3} href='#'>Brunch </NavItem>

					</Nav>
				</Navbar.Collapse>
			</Navbar>	
		);
	}

});

module.exports = EventNavBar;