// Component for difference between jsx or without jsx

import React from 'react'

// With  JSX
// const Welcome = () => {
//   return (
//     <div>
//       <h1>Welcome Message</h1>
//     </div>
//   )
// }


// Without JSX
const Welcome = () =>{
    return React.createElement(
        'div',
        {id:'welcome', className: 'welcome'},
        React.createElement(
            'h1',
            {id: 'name', classname: 'welcome-name'},
            'Welcome'
        ),
        React.createElement(
            'p',
            {id: 'paragraph', classname: 'welcome-paragraph'},
            "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod!"
        )
    )
}

export default Welcome
