import React, {Component} from 'react';

class DisplayComponent extends Component
{


	render()
	{
		return(
			<p>
		{/*	{this.props.number}
			{this.props.text}*/}
			{this.props.post}<br/>
			{this.props.test}
			</p>
			)
	}
}
export default DisplayComponent;