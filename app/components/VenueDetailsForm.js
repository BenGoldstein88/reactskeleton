var React = require('react');
var PropTypes = React.PropTypes

var VenueDetailsForm = React.createClass({

	render: function() {
		return (
			<div className='col-sm-6' style={{
				border: '1px dashed orange',
				height: '100%'
			}}>
				<h2>Venue Details Stuff for {this.props.event}</h2>
			</div>
		);
	}
});

VenueDetailsForm.propTypes = {
	event: PropTypes.string.isRequired
}

module.exports = VenueDetailsForm;