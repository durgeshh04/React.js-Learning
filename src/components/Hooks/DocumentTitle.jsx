import React, {useEffect} from 'react'

const DocumentTitle = (count) => {
    useEffect(() => {
    document.title = `Count ${count}`
    }, [count])
}

export default DocumentTitle
