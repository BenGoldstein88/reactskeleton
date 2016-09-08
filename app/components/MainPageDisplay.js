var React = require('react');
var MainPageDisplayBudget = require('./MainPageDisplayBudget')

var MainPageDisplay = React.createClass({

	render: function() {

		var thingToDisplay = <MainPageDisplayBudget />
		return (
			<div 
				className='col-sm-9'
				style={
					{
						'minHeight': '90%',
						'border': '1px solid purple',
						position: 'relative'
					}
				}>
				{thingToDisplay}
			</div>
		);
	}

});

module.exports = MainPageDisplay;