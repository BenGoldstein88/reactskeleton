var React = require('react');
var Nav = require('react-bootstrap').Nav
var Navbar = require('react-bootstrap').Navbar
var NavItem = require('react-bootstrap').NavItem
var PropTypes = React.PropTypes

var EventNavBar = React.createClass({

	render: function() {
		return (
			<Navbar style={{'marginBottom': '0px'}}>
				<Navbar.Collapse>
					<Nav>
						<NavItem eventKey={1} onSelect={this.props.onSelect} href='#'>Rehearsal</NavItem>
						<NavItem eventKey={2} onSelect={this.props.onSelect} href='#'>Wedding</NavItem>
						<NavItem eventKey={3} onSelect={this.props.onSelect} href='#'>Brunch</NavItem>

					</Nav>
				</Navbar.Collapse>
			</Navbar>	
		);
	}

});

EventNavBar.propTypes = {
	event: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired
}

module.exports = EventNavBar;