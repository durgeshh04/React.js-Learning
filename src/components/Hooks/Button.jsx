import React from 'react'

const Button = ({handleClick, children}) => {
    console.log("Button is rendering...")
  return (
    <div>
      <button onClick={handleClick}>
        {children}
      </button>
    </div>
  )
}

export default  React.memo(Button)
