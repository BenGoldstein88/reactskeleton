var React = require('react');

var MainPageDisplay = React.createClass({

	render: function() {
		return (
			<div 
				className='col-sm-9'
				style={
					{
						'minHeight': '90%',
						'border': '1px solid purple'
					}
				}>
				<h1> MainPageDisplay </h1>
			</div>
		);
	}

});

module.exports = MainPageDisplay;