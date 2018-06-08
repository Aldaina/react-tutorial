import React, { Component } from 'react';
import DisplayComponent from './DisplayComponent';
import ButtonComponent from './ButtonComponent';
import {connect} from 'react-redux';
import {submitAction} from './redux/action/action';
import {bindActionCreators} from 'redux';
class App2 extends Component{

constructor(props){
	super(props);
	this.state={
		postState: "",
		test: "",
		text: ""
	}
	this.displayText = this.displayText.bind(this);
}

displayText(a){
    this.setState({text: a})
    console.log(a);
  }

componentWillMount(){
	this.setState({
		postState: this.props.post,
		test: this.props.test

	})
}
componentWillReceiveProps(nextProps){

}
render(){
	return(
		<div>
			<DisplayComponent
			post = {this.state.postState}
			test = {this.state.test}
			/>
			<ButtonComponent
			displayText = {this.displayText}
			/>
		</div>
	)
}

}
function mapStateToProps(state){
	return {
		post: state.post,
		test: state.test
	}
}
function matchDispatchToProps(dispatch){
	return bindActionCreators({
		submitAction: submitAction
	},dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(App2);