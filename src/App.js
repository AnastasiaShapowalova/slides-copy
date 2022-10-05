import './App.css';

import { Screen, ScreenEditor, Text, TextEditor, TokensEditor } from './components'

import { useState } from 'react'

function App() {
  const [state, setState] = useState({
    fs: 'body1',
    lh: 'body1',
    color: 'accent',
    bg: 'default'
  })

  const update = (type, value) => {
    setState((prev) => ({ ...prev, [type]: value }))
  }
  
  return (
    <div className="App">
      <Screen bg={state?.bg}>
        <Text fs={state?.fs} lh={state?.lh} color={state?.color}>
          My text
        </Text>
      </Screen>
      
      <TextEditor update={update} defaultValues={state} />
      <ScreenEditor update={update} defaultValues={state} />
      <TokensEditor />
    </div>
  );
}

export default App;
