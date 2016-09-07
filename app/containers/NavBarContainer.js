var React = require('react');
var NavBar = require('../components/NavBar');

// var PropTypes = React.PropTypes;

var NavBarContainer = React.createClass({
	
	getInitialState: function() {
		return {
			bsStyles: {
				'home': 'primary',
				'couple': 'info',
				'settings': 'warning', 
				'toggle': 'danger'
			} 
		};
	},
	render: function() {
		return (
			<NavBar 
				bsStyles={this.state.bsStyles}/>
		);
	}

});


module.exports = NavBarContainer;