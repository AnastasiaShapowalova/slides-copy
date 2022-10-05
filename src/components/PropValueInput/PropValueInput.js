const PropValueInput = ({ defaultValue, v, onChange, isColorPicker }) => {

  return (isColorPicker ? 
    <input type='color' defaultValue={defaultValue} onChange={(e) => onChange(e, v)}/> : 	
    <input 
      defaultValue={defaultValue}
      onChange={(e) => onChange(e, v)}
    />
  )
}

export default PropValueInput