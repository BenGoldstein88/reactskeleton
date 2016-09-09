var React = require('react');
var VenueBudgetItem = require('./VenueBudgetItem')
var NewVenueBudgetItemButton = require('./NewVenueBudgetItemButton')
var VenueRentalItem = require('./VenueRentalItem')
var Button = require('react-bootstrap').Button

var PropTypes = React.PropTypes

var VenueBudget = React.createClass({

	render: function() {
		return (
			<div className='col-sm-6' style = {{
				border: '1px dashed blue',
				height: '100%'
			}}>
				<VenueBudgetItem />
				<NewVenueBudgetItemButton />
				<VenueRentalItem />
				<Button onClick={this.props.onBudgetClick}>View in Budget</Button>
			</div>
		);
	}

});

VenueBudget.proptypes = {
	onBudgetClick: PropTypes.func.isRequired
}

module.exports = VenueBudget;