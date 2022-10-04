import React from "react"
import STYLES from '../../constants/styles'
import { onTokenUpdate } from '../../helpers'

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

export default PropList