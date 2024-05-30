import { useState } from 'preact/hooks'
import './app.css'
import Fondo from './Fondo'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Fondo/>
    </>
  )
}
