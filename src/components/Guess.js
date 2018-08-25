import * as React from 'react'

export default function Guess(props) {
  return (
    <div>
      <button onClick={() => props.clickBtn('a')}>A</button>
    </div>
  )
}