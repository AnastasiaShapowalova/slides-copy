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