var React = require('react');
var Button = require('react-bootstrap').Button
var PropTypes = React.PropTypes

var MainPageDisplayIcon = React.createClass({

	render: function() {
		var bsStyleMap = {
			test: 'warning'
		}
		return (
			<div 
				style={
					{
						'border': '1px solid red',
						height: '100%',
						marginTop: '.05%',
						position: 'relative'
					}
				}>  
				<Button bsStyle={bsStyleMap.test} onClick={this.props.onVenuesClick} style={{
					position: 'absolute',
					top: '25%',
					left: '10%'
				}}>V</Button>
				<Button bsStyle={bsStyleMap.test} onClick={this.props.onVenuesClick} style={{
					position: 'absolute',
					top: '25%',
					right: '10%'
				}}>V</Button>
				<Button bsStyle={bsStyleMap.test} onClick={this.props.onVenuesClick} style={{
					position: 'absolute',
					top: '2%',
					left: '27%'
				}}>V</Button>
				<Button bsStyle={bsStyleMap.test} onClick={this.props.onVenuesClick} style={{
					position: 'absolute',
					top: '2%',
					right: '27%'
				}}>V</Button>
				<Button bsStyle={bsStyleMap.test} onClick={this.props.onVenuesClick} style={{
					position: 'absolute',
					bottom: '5%',
					right: '48%'
				}}>V</Button>				
			</div>
		);
	}
})
MainPageDisplayIcon.propTypes = {
	onVenuesClick: PropTypes.func.isRequired
}
module.exports = MainPageDisplayIcon;