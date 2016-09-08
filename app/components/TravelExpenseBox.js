var React = require('react');

var TravelExpenseBox = React.createClass({

	render: function() {
		return (
			<div style={{
				border: '1px solid yellow',
				borderRadius: '5px',
				margin: '5%',
				minHeight: '25%',
				maxHeight: '35%'
			}}>
				<h1>Travel Expenses</h1>
			</div>
		);
	}

});

module.exports = TravelExpenseBox;