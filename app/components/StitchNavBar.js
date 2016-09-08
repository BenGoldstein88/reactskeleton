var React = require('react');
var Nav = require('react-bootstrap').Nav
var Navbar = require('react-bootstrap').Navbar
var NavItem = require('react-bootstrap').NavItem
var PropTypes = React.PropTypes
var StitchNavBar = React.createClass({

	render: function() {
		return (
			<Navbar style={{'marginBottom': '0px'}}>
				<Navbar.Header>
					<Navbar.Brand>
						<Nav pullLeft>
							<NavItem eventKey={1} onSelect={this.props.onSelect} href='#'>Stitch</NavItem>
						</Nav>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<NavItem disabled={true}className='navbar-text'> Chuck & Larry </NavItem>
						<NavItem eventKey={2} href='#'>Settings</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}

});

StitchNavBar.propTypes = {
	display: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired
}
module.exports = StitchNavBar;