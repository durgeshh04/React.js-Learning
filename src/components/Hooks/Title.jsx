import React from 'react'

const Title = (prop) => {
    console.log("Title is rendering...")
  return (
    <div>
      <h1>{prop.text}</h1>
    </div>
  )
}

export default  React.memo(Title)
