var React = require('react');
var MainPageDisplayBudget = require('./MainPageDisplayBudget')
var PropTypes = React.PropTypes;

var MainPageDisplay = React.createClass({

	render: function() {

		switch(this.props.display) {
			case 'checklist':
				var thingToDisplay = <h1> This is the Checklist Page </h1>
				break;
			case 'budget':
				var thingToDisplay = <MainPageDisplayBudget />
				break;
			case 'timeline':
				var thingToDisplay = <h1> This is the Timeline Page </h1>
				break;
			case 'guestlist':
				var thingToDisplay = <h1> This is the Guestlist Page </h1>
				break;
			case 'reminders':
				var thingToDisplay = <h1> This is the Reminders Page </h1>
				break;
			case 'seatingchart':
				var thingToDisplay = <h1> This is the Seatingchart Page </h1>
				break;
			default:
				var thingToDisplay = <h1> This is the Home Page </h1>

		}
		return (
			<div 
				className='col-sm-9'
				style={
					{
						'minHeight': '90%',
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
	display: PropTypes.string.isRequired
}

module.exports = MainPageDisplay;