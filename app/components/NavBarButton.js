var React = require('react');
var PropTypes = React.PropTypes;
var Button = require('react-bootstrap').Button

var NavBarButton = React.createClass({


	render: function() {
		if (!!this.props.active) {
			var bsStyle = this.props.bsStyles['toggle']
		} else {
			var bsStyle = this.props.bsStyles[this.props.label]			
		}
		return (
			<Button 
				bsStyle={bsStyle}
				onClick={this.props.onClick}
				type='button'>
				{this.props.label}
			</Button>
		);
	}

});

NavBarButton.propTypes = {
	bsStyles: PropTypes.object.isRequired,
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
}

module.exports = NavBarButton;