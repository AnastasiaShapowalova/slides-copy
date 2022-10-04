const PropValueInput = ({ defaultValue, v, onChange }) => {

	return (
		// <input 
		// 	defaultValue={defaultValue}
		// 	onChange={(e) => onChange(e, v)}
		// />
		<input type='color' defaultValue={defaultValue} onChange={(e) => onChange(e, v)}/>
	)
}

export default PropValueInput