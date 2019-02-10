import React from 'react'

const Button = props => (
	<button 
		className={`button button--${props.type ? props.type : 'default'}`} 
		onClick={props.cb}>
			{props.text ? props.text : props.type || 'button'}
	</button>
)

export default Button
