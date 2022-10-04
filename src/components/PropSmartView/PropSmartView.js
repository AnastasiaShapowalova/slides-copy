import React from 'react'

const PropSmartView = ({ 
	name,
	isOptionsExists,
	options,
	defaultValue,
	v,
	inputComponent,
	selectComponent,
	onChange
}) => {
	return (
		<div>
			{name}
			{isOptionsExists ? React.cloneElement(selectComponent, { options, defaultValue, v, onChange }) 
											 : React.cloneElement(inputComponent, { defaultValue, v, onChange })}
		</div>
	)
}

export default PropSmartView