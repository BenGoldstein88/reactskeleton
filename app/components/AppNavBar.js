var React = require('react');
var Nav = require('react-bootstrap').Nav
var Navbar = require('react-bootstrap').Navbar
var NavItem = require('react-bootstrap').NavItem
var PropTypes = React.PropTypes

var AppNavBar = React.createClass({

	render: function() {
		var activeKeyMap = {
			'checklist': 1,
			'budget': 2,
			'timeline': 3,
			'guestlist': 4,
			'reminders': 5,
			'seatingchart': 6 
		}
		var activeKey = activeKeyMap[this.props.display]
		return (
			<Navbar style={{'marginBottom': '0px'}}>
				<Navbar.Collapse>
					<Nav activeKey={activeKey}>
						<NavItem eventKey={1} onSelect={this.props.onSelect} href='#'>Checklist </NavItem>
						<NavItem eventKey={2} onSelect={this.props.onSelect} href='#'>Budget </NavItem>
						<NavItem eventKey={3} onSelect={this.props.onSelect} href='#'>Timeline </NavItem>
						<NavItem eventKey={4} onSelect={this.props.onSelect} href='#'>Guest List </NavItem>
						<NavItem eventKey={5} onSelect={this.props.onSelect} href='#'>Reminders </NavItem>
						<NavItem eventKey={6} onSelect={this.props.onSelect} href='#'>Seating Chart </NavItem>

					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}

});

AppNavBar.propTypes = {
	onSelect: PropTypes.func.isRequired,
	display: PropTypes.string.isRequired
}
module.exports = AppNavBar;