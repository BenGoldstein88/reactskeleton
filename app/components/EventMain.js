var React = require('react');
var EventNavBar = require('./EventNavBar')
var MainPage = require('./MainPage')
var PropTypes = React.PropTypes

var EventMain = React.createClass({

	handleSelect: function(eventKey) {
		switch(eventKey) {
			case 1:
				this.props.setEvent('rehearsal')
				break;
			case 2:
				this.props.setEvent('wedding')
				break;
			case 3:
				this.props.setEvent('brunch')
				break;
			default:
				this.props.setEvent('wedding')

		}
	},
	render: function() {
		return (
			<div>
				<EventNavBar event={this.props.event} onSelect={this.handleSelect}/>
				<MainPage setDisplay={this.props.setDisplay} display={this.props.display} setEvent={this.props.setEvent} event={this.props.event}/>
			</div>
		);
	}

});

EventMain.propTypes = {
	display: PropTypes.string.isRequired,
	event: PropTypes.string.isRequired,
	setEvent: PropTypes.func.isRequired,
	setDisplay: PropTypes.func.isRequired
}

module.exports = EventMain;