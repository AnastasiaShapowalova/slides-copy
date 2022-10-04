const PropValueSelect = ({defaultValue, v, options, onChange}) => {
	return (
		<select 
			defaultValue={defaultValue}
			onChange={(e) => onChange(e, v)}
		>
			{options?.map((option) => {
				return (
					<option key={option.value} value={option.value}>{option.name}</option>
				)
			})}
		</select>
	)
}

export default PropValueSelect