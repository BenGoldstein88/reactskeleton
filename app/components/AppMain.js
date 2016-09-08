var React = require('react');
var AppNavBar = require('./AppNavBar')
var EventMain = require('./EventMain')
var PropTypes = React.PropTypes

var AppMain = React.createClass({

	handleSelect: function(eventKey) {
		console.log(eventKey)
		switch(eventKey) {
			case 1:
				this.props.setDisplay('checklist')
				break;
			case 2:
				this.props.setDisplay('budget')
				break;
			case 3:
				this.props.setDisplay('timeline')
				break;
			case 4:
				this.props.setDisplay('guestlist')
				break;
			case 5:
				this.props.setDisplay('reminders')
				break;
			case 6:
				this.props.setDisplay('seatingchart')
				break;
			default:
				this.props.setDisplay('home')
		}
	},
	render: function() {
		return (
			<div>
				<AppNavBar onSelect={this.handleSelect} display={this.props.display}/>
				<EventMain display={this.props.display}/>
			</div>
		);
	}

});

AppNavBar.propTypes = {
	display: PropTypes.string.isRequired,
	setDisplay: PropTypes.func.isRequired
}

module.exports = AppMain;