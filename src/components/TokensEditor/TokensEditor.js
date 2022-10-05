import {
 GroupList,
 GroupSimpleView,
 PropList,
 PropSmartView,
 PropValueInput,
 PropValueSelect
} from '../../components'

import React from 'react'
import STYLES from '../../constants/styles'

const TokensEditor = () => {
 return (
  <div>
		{/* STYLES list keys map pass names of group */}
   <GroupList list={Object.keys(STYLES)}>
		{/* shows list of names of the group */}
    <GroupSimpleView>
		{/* shows list of names in the group */}
     <PropList>
			 {/* division into type components for drawing values */}
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