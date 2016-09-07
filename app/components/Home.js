var React = require('react');
var NavBarContainer = require('../containers/NavBarContainer');
// var PropTypes = React.PropTypes;


var Home = React.createClass({

	render: function() {
		return (
			<div>
				<h1> Hello! </h1>
				<NavBarContainer 
					bsStyles={this.props.bsStyles}/>
			</div>
		);
	}

});



module.exports = Home;