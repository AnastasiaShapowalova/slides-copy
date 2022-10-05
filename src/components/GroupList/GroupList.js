import React from "react"

const GroupList = ({ list, children }) => {

	return (
    <>
      {list.map((item) => React.cloneElement(children, { name: item }))}
    </>
  )
}

export default GroupList