var React = require('react');
var NavBarTop = require('../components/NavBarTop');

// var PropTypes = React.PropTypes;

var NavBarTopContainer = React.createClass({
	
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
			<NavBarTop 
				bsStyles={this.state.bsStyles}/>
		);
	}

});


module.exports = NavBarTopContainer;