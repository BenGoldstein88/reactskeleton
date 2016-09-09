var React = require('react');
var BudgetHeader = require('./BudgetHeader')
var VenueExpenseBox = require('./VenueExpenseBox')
var TravelExpenseBox = require('./TravelExpenseBox')
var BudgetFooter = require('./BudgetFooter')
var PropTypes = React.PropTypes

var MainPageDisplayBudget = React.createClass({

	render: function() {
		return (
			<div>
				<BudgetHeader event={this.props.event}/>
				<VenueExpenseBox />
				<TravelExpenseBox />
				<BudgetFooter />
			</div>
		);
	}

});

MainPageDisplayBudget.propTypes = {
	event: PropTypes.string.isRequired
}

module.exports = MainPageDisplayBudget;