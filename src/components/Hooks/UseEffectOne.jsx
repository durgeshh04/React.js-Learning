import React, { useState, useEffect } from 'react'

const UseEffectOne = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `Clicked ${count} times`
  })
  
  return (
      <div>
          <button onClick={() => setCount(prevCount => prevCount + 1)}>Click {count}</button>
          <h1>Clicked {count} times</h1>
      </div>
  )
}

export default UseEffectOne
