import React from 'react'

const PropSmartView = ({ 
	name,
	isOptionsExists,
	options,
	defaultValue,
	v,
	inputComponent,
	selectComponent,
	onChange,
	isColorPicker
}) => {
	console.log(name)
	return (
		<>
		{name !== '_options' ?  
		(<div>
				{name}
				{isOptionsExists ? React.cloneElement(selectComponent, { options, defaultValue, v, onChange }) 
												: React.cloneElement(inputComponent, { defaultValue, v, onChange, isColorPicker })}
		</div>) : null}
		</>
	)
}

export default PropSmartView