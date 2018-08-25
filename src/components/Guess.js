import * as React from 'react'
import propTypes from 'prop-types'
import Button from '@material-ui/core/Button'

export default function Guess(props) {
  return (
    <div className="keyboard">
      <div>
        <Button variant="contained" color="primary" onClick={() => props.clickBtn('q')}>Q</Button>
        <Button variant="contained" color="primary" onClick={() => props.clickBtn('w')}>W</Button>
        <Button variant="contained" color="primary" onClick={() => props.clickBtn('e')}>E</Button>
        <Button variant="contained" color="primary" onClick={() => props.clickBtn('r')}>R</Button>
        <Button variant="contained" color="primary" onClick={() => props.clickBtn('t')}>T</Button>
        <Button variant="contained" color="primary" onClick={() => props.clickBtn('y')}>Y</Button>
        <Button variant="contained" color="primary" onClick={() => props.clickBtn('u')}>U</Button>
        <Button variant="contained" color="primary" onClick={() => props.clickBtn('i')}>I</Button>
        <Button variant="contained" color="primary" onClick={() => props.clickBtn('o')}>O</Button>
        <Button variant="contained" color="primary" onClick={() => props.clickBtn('p')}>P</Button>
      </div>
      <div>
        <Button variant="contained" color="primary"  onClick={() => props.clickBtn('a')}>A</Button>
        <Button variant="contained" color="primary"  onClick={() => props.clickBtn('s')}>S</Button>
        <Button variant="contained" color="primary"  onClick={() => props.clickBtn('d')}>D</Button>
        <Button variant="contained" color="primary"  onClick={() => props.clickBtn('f')}>F</Button>
        <Button variant="contained" color="primary"  onClick={() => props.clickBtn('g')}>G</Button>
        <Button variant="contained" color="primary"  onClick={() => props.clickBtn('h')}>H</Button>
        <Button variant="contained" color="primary"  onClick={() => props.clickBtn('j')}>J</Button>
        <Button variant="contained" color="primary"  onClick={() => props.clickBtn('k')}>K</Button>
        <Button variant="contained" color="primary"  onClick={() => props.clickBtn('l')}>L</Button>
      </div>
      <div>
        <Button variant="contained" color="primary"   onClick={() => props.clickBtn('z')}>Z</Button>
        <Button variant="contained" color="primary"   onClick={() => props.clickBtn('x')}>X</Button>
        <Button variant="contained" color="primary"   onClick={() => props.clickBtn('c')}>C</Button>
        <Button variant="contained" color="primary"   onClick={() => props.clickBtn('v')}>V</Button>
        <Button variant="contained" color="primary"   onClick={() => props.clickBtn('b')}>B</Button>
        <Button variant="contained" color="primary"   onClick={() => props.clickBtn('n')}>N</Button>
        <Button variant="contained" color="primary"   onClick={() => props.clickBtn('m')}>M</Button>
      </div>
    </div>
  )
}

Guess.propTypes = {
  clickBtn: propTypes.func
}