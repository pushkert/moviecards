import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement,incrementByAmount } from '../../store/reducer/counter'
// import styles from './Counter.module.css'

export default function Counter() {
  const {value} = useSelector((state: any) => state.counter)
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment
        </button>
        <span style={{color:'white'}}>{value}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}