var React = require('react');
var PropTypes = React.PropTypes

var BudgetHeader = React.createClass({

	render: function() {
		return (
			<div style={{
				border: '1px dotted pink',
				textAlign: 'center',
				marginTop: '2.5%'
			}}>
				<h1>Budget for {this.props.event}</h1>

			</div>
		);
	}

});

BudgetHeader.propTypes = {
	event: PropTypes.string.isRequired
}
module.exports = BudgetHeader;