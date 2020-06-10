import React from 'react'

import { useMyHook } from 'kanca'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
