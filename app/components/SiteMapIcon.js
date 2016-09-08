var React = require('react');

var SiteMapIcon = React.createClass({

	render: function() {
		return (
			<div 
				className='cut-diamond'
				style={
					{
						'border': '1px solid red',
						'minHeight': '33.3%',
						marginTop: '.05%'
					}
				}>  
				

			</div>
		);
	}

});

module.exports = SiteMapIcon;