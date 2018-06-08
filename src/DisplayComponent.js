import React, {Component} from 'react';

class DisplayComponent extends Component
{


	render()
	{
		return(
			<p>
			{this.props.number}
			{this.props.text}
			</p>
			)
	}
}
export default DisplayComponent;