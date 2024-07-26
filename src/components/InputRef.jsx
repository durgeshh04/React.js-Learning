// Taking input from ForwadingRefs.jsx: Practicing forwardRef

import React, {forwardRef} from 'react'

const InputRef = forwardRef((props, ref) => {
  return (
    <div>
      <input ref={ref} type="text" />
    </div>
  )
})

export default InputRef
