import React from 'react'

const Count = ({text, count}) => {
    // console.log("Count is rendering...")
  return (
    <div>
      <h2>{text}:- {count}</h2>
    </div>
  )
}

export default  React.memo(Count)
