var React = require('react');

var BudgetFooter = React.createClass({

	render: function() {
		return (
			<div style={{
				border: '1px dotted orange',
				bottom: '0',
				textAlign: 'center',
				marginBottom: '2.5%'
			}}>
				<h1>Budget Footer </h1>
			</div>
		);
	}

});

module.exports = BudgetFooter;