var React = require('react');

var RemindersBox = React.createClass({

	render: function() {
		return (
			<div 
				style={
					{
						'border': '1px solid blue',
						'minHeight': '30%'
					}
				}> 
				<h1> Reminders </h1>
			</div>
		);
	}

});

module.exports = RemindersBox;