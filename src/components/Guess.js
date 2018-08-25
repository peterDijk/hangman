import * as React from 'react'
import propTypes from 'prop-types'

export default function Guess(props) {
  return (
    <div className="keyboard">
      <div>
        <button onClick={() => props.clickBtn('q')}>Q</button>
        <button onClick={() => props.clickBtn('w')}>W</button>
        <button onClick={() => props.clickBtn('e')}>E</button>
        <button onClick={() => props.clickBtn('r')}>R</button>
        <button onClick={() => props.clickBtn('t')}>T</button>
        <button onClick={() => props.clickBtn('y')}>Y</button>
        <button onClick={() => props.clickBtn('u')}>U</button>
        <button onClick={() => props.clickBtn('i')}>I</button>
        <button onClick={() => props.clickBtn('o')}>O</button>
        <button onClick={() => props.clickBtn('p')}>P</button>
      </div>
      <div>
        <button onClick={() => props.clickBtn('a')}>A</button>
        <button onClick={() => props.clickBtn('s')}>S</button>
        <button onClick={() => props.clickBtn('d')}>D</button>
        <button onClick={() => props.clickBtn('f')}>F</button>
        <button onClick={() => props.clickBtn('g')}>G</button>
        <button onClick={() => props.clickBtn('h')}>H</button>
        <button onClick={() => props.clickBtn('j')}>J</button>
        <button onClick={() => props.clickBtn('k')}>K</button>
        <button onClick={() => props.clickBtn('l')}>L</button>
      </div>
      <div>
        <button onClick={() => props.clickBtn('z')}>Z</button>
        <button onClick={() => props.clickBtn('x')}>X</button>
        <button onClick={() => props.clickBtn('c')}>C</button>
        <button onClick={() => props.clickBtn('v')}>V</button>
        <button onClick={() => props.clickBtn('b')}>B</button>
        <button onClick={() => props.clickBtn('n')}>N</button>
        <button onClick={() => props.clickBtn('m')}>M</button>
      </div>
    </div>
  )
}

Guess.propTypes = {
  clickBtn: propTypes.func
}