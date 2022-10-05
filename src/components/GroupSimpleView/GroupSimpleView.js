import React from "react"

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

export default GroupSimpleView