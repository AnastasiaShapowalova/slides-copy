import React from 'react'
import STYLES from '../../constants/styles'

const onTokenUpdate = (e, v) => {
	document.querySelector(':root').style.setProperty(v, e.target.value);
}

const GroupSimpleView = ({ name, children }) => {
	return (
		<div>
			<strong>{name}</strong>
			<div>
				{React.cloneElement(children, { group: name })}
			</div>
		</div>
	)
}

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

const PropValueInput = ({ defaultValue, v, onChange }) => {
	return (
		<input 
			defaultValue={defaultValue}
			onChange={(e) => onChange(e, v)}
		/>
	)
}

const GroupList = ({ list, children }) => {
	return (
		<>
			{list.map((item) => React.cloneElement(children, { name: item }))}
		</>
	)
}

const PropList = ({ group, children }) => {
	const isOptionsExists = !!STYLES[group]._options?.length
	return (
		<>
			{Object.keys(STYLES[group]).map((item) => React.cloneElement(children, { 
				key: STYLES[group][item].name,
				name: item,
				isOptionsExists,
				options: STYLES[group]._options,
				defaultValue: STYLES[group][item].defaultValue,
				v: STYLES[group][item].var,
				onChange: onTokenUpdate
			}))}
		</>
	)
}

const TokensEditor = () => {
	return (
		<div>
			<GroupList list={Object.keys(STYLES)}>
				<GroupSimpleView>
					<PropList>
						<PropSmartView
							inputComponent={<PropValueInput />}
							selectComponent={<PropValueSelect />}
						/>
					</PropList>
				</GroupSimpleView>
			</GroupList>
		</div>
	)
}

export default TokensEditor