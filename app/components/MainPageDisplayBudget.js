var React = require('react');
var BudgetHeader = require('./BudgetHeader')
var VenueExpenseBox = require('./VenueExpenseBox')
var TravelExpenseBox = require('./TravelExpenseBox')
var BudgetFooter = require('./BudgetFooter')

var MainPageDisplayBudget = React.createClass({

	render: function() {
		return (
			<div>
				<BudgetHeader />
				<VenueExpenseBox />
				<TravelExpenseBox />
				<BudgetFooter />
			</div>
		);
	}

});

module.exports = MainPageDisplayBudget;