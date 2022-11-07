import React, {useEffect} from 'react'

function Child({returnComment}) {
    useEffect(() => {
        console.log("Function was called")
    }, [returnComment])

  return (
    <div>Child {returnComment("Pedro")}</div>
  )
}

export default Child