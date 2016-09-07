var React = require('react');
var NavBarButton = require('../components/NavBarButton');

var PropTypes = React.PropTypes;

var NavBarButtonContainer = React.createClass({

	getInitialState: function() {
		return {
			active: false, 
		};
	},
	handleClick: function(e) {
		// if(label=='Home') {

		// } else if(label=='Couple') {

		// } else if(label=='Settings') {

		// } else {

		// }
		e.preventDefault();
		var newState = !this.state.active
		console.log('Swapping button status to ' + newState.toString() + '!')
		// this.props.bsStyle='danger'
		this.setState({
			active: newState
		})
	},

	render: function() {
		return (
			<NavBarButton
				bsStyles={this.props.bsStyles}
				label={this.props.label}
				onClick={this.handleClick}
				active={this.state.active} />
		);
	}

});

NavBarButtonContainer.propTypes = {
	bsStyles: PropTypes.object.isRequired,
	label: PropTypes.string.isRequired
}


module.exports = NavBarButtonContainer;