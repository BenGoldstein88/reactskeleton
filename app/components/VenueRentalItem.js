var React = require('react');

var VenueRentalItem = React.createClass({

	render: function() {
		return (
			<div style={{
				border: '1px dashed green'
			}}> 
				<h2>Venue Rental Item </h2>
			</div>
		);
	}

});

module.exports = VenueRentalItem;