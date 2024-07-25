// Practice of State Hook;

import React, { useState } from 'react'

// Functional Component
const StateHook = () => {
  
      const [message, setMessage] = useState('Welcome to the world of React Hooks')
      const [, setCount] = useState(0)

      const handleClick = () => {
          setMessage("Thank you for subscribe")
          setCount(prevCount => {
              const newCount = prevCount + 1;
              if (newCount > 1) {
                  alert("You are not allowed to click more than once")
              }
              return newCount;
          })
      }

   return (
     <div>
       <h1>{message}</h1>
       <button onClick={handleClick}>Subscribe</button>
     </div>
   )
}

export default StateHook