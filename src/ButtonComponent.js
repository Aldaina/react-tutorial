import React, {Component} from 'react';

class ButtonComponent extends Component
{
	render() {
		return(
			<div>
				<button onClick={this.props.incrementNumber}>increment</button>
				<button onClick={this.props.divideNumber}>divide</button>
				<button onClick={this.props.defaultButton}>reset</button>
			</div>
		)
	}
} 
export default ButtonComponent;