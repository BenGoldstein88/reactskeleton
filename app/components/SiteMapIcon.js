var React = require('react');
var Button = require('react-bootstrap').Button
var PropTypes = React.PropTypes

var SiteMapIcon = React.createClass({

	render: function() {
		return (
			<div 
				className='cut-diamond'
				style={
					{
						'border': '1px solid red',
						'minHeight': '33.3%',
						marginTop: '.05%',
						position: 'relative'
					}
				}>  
				<Button onClick={this.props.onVenuesClick} style={{
					position: 'absolute',
					top: '25%',
					left: '10%'
				}}>V</Button>
				<Button onClick={this.props.onVenuesClick} style={{
					position: 'absolute',
					top: '25%',
					right: '10%'
				}}>V</Button>
				<Button onClick={this.props.onVenuesClick} style={{
					position: 'absolute',
					top: '2%',
					left: '27%'
				}}>V</Button>
				<Button onClick={this.props.onVenuesClick} style={{
					position: 'absolute',
					top: '2%',
					right: '27%'
				}}>V</Button>
				<Button onClick={this.props.onVenuesClick} style={{
					position: 'absolute',
					bottom: '5%',
					right: '42%'
				}}>V</Button>				
			</div>
		);
	}

});

SiteMapIcon.propTypes = {
	onVenuesClick: PropTypes.func.isRequired
}

module.exports = SiteMapIcon;