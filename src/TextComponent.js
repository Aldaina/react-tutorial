import React, {Component} from 'react';

class TextComponent extends Component{
	getInput(){
		let value = this.refs.inputField.value;
		this.props.displayText(value);
	}
		render() {
		return(
			<div>
				<input type="text" ref="inputField"/>
				<button onClick={() => this.getInput() }>submit</button>
			</div>
		)
	}
}
export default TextComponent;