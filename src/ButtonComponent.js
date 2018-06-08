import React, {Component} from 'react';

class ButtonComponent extends Component{
		handleSubmit(){
		let value = this.refs.postText.value;
		this.props.displayText(value);
	}
	render() {
		return(
			<div>
				<button onClick={this.props.incrementNumber}>increment</button>
				<button onClick={this.props.divideNumber}>divide</button>
				<button onClick={this.props.defaultButton}>reset</button>
				<input ref="postText"/>
				<button onClick= {()=>this.handleSubmit()}>submit</button>
			</div>
		)
	}
} 
export default ButtonComponent;