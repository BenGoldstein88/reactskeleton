var React = require('react');
var VenueDetailsForm = require('./VenueDetailsForm')
var VenueBudget = require('./VenueBudget')
var PropTypes = React.PropTypes

var MainPageDisplayVenue = React.createClass({

	render: function() {
		return (
			<div>
				<VenueDetailsForm event={this.props.event}/>
				<VenueBudget onBudgetClick={this.props.onBudgetClick}/>
			</div>
		);
	}

});

MainPageDisplayVenue.propTypes = {
	onBudgetClick: PropTypes.func.isRequired,
	event: PropTypes.string.isRequired
}
module.exports = MainPageDisplayVenue;