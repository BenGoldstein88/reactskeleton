var React = require('react');

var BudgetHeader = React.createClass({

	render: function() {
		return (
			<div style={{
				border: '1px dotted pink',
				textAlign: 'center',
				marginTop: '2.5%'
			}}>
				<h1>Budget</h1>

			</div>
		);
	}

});

module.exports = BudgetHeader;