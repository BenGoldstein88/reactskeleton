var React = require('react');
var MainPageDisplayBudget = require('./MainPageDisplayBudget')
var MainPageDisplayVenue = require('./MainPageDisplayVenue')
var PropTypes = React.PropTypes;

var MainPageDisplay = React.createClass({
	handleBudgetClick: function(e) {
		this.props.setDisplay('budget')
	},
	render: function() {

		switch(this.props.display) {
			case 'checklist':
				var thingToDisplay = <h1> This is the Checklist Page for the {this.props.event}</h1>
				break;
			case 'budget':
				var thingToDisplay = <MainPageDisplayBudget event={this.props.event}/>
				break;
			case 'timeline':
				var thingToDisplay = <h1> This is the Timeline Page for the {this.props.event}</h1>
				break;
			case 'guestlist':
				var thingToDisplay = <h1> This is the Guestlist Page for the {this.props.event}</h1>
				break;
			case 'reminders':
				var thingToDisplay = <h1> This is the Reminders Page for the {this.props.event}</h1>
				break;
			case 'seatingchart':
				var thingToDisplay = <h1> This is the Seatingchart Page for the {this.props.event}</h1>
				break;
			case 'venues':
				// this is temporary, as there should probably be a list of venues first
				var thingToDisplay = <MainPageDisplayVenue onBudgetClick={this.handleBudgetClick}/>
				break;
			default:
				var thingToDisplay = <h1> This is the Home Page for the {this.props.event}</h1>

		}
		return (
			<div 
				className='col-sm-9'
				style={
					{
						height: '100%',
						'border': '1px solid purple',
						position: 'relative'
					}
				}>
				{thingToDisplay}
			</div>
		);
	}

});

MainPageDisplay.propTypes = {
	display: PropTypes.string.isRequired,
	event: PropTypes.string.isRequired,
	setDisplay: PropTypes.func.isRequired,
	setEvent: PropTypes.func.isRequired
}

module.exports = MainPageDisplay;