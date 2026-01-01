import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState<number | null>(null)
  const [operation, setOperation] = useState<string | null>(null)
  const [newNumber, setNewNumber] = useState(true)

  const handleNumberClick = (num: string) => {
    if (newNumber) {
      setDisplay(num)
      setNewNumber(false)
    } else {
      setDisplay(display === '0' ? num : display + num)
    }
  }

  const handleOperationClick = (op: string) => {
    const currentValue = parseFloat(display)

    if (previousValue !== null && operation && !newNumber) {
      calculate()
    } else {
      setPreviousValue(currentValue)
    }

    setOperation(op)
    setNewNumber(true)
  }

  const calculate = () => {
    if (previousValue === null || operation === null) return

    const currentValue = parseFloat(display)
    let result = 0

    switch (operation) {
      case '+':
        result = previousValue + currentValue
        break
      case '-':
        result = previousValue - currentValue
        break
      case '×':
        result = previousValue * currentValue
        break
      case '÷':
        result = previousValue / currentValue
        break
    }

    setDisplay(String(result))
    setPreviousValue(null)
    setOperation(null)
    setNewNumber(true)
  }

  const handleClear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setNewNumber(true)
  }

  const handleDecimal = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.')
      setNewNumber(false)
    }
  }

  return (
    <div className="calculator">
      <h1>電卓</h1>
      <div className="display">{display}</div>
      <div className="buttons">
        <button className="btn clear" onClick={handleClear}>C</button>
        <button className="btn operation" onClick={() => handleOperationClick('÷')}>÷</button>
        <button className="btn operation" onClick={() => handleOperationClick('×')}>×</button>
        <button className="btn operation" onClick={() => handleOperationClick('-')}>-</button>

        <button className="btn" onClick={() => handleNumberClick('7')}>7</button>
        <button className="btn" onClick={() => handleNumberClick('8')}>8</button>
        <button className="btn" onClick={() => handleNumberClick('9')}>9</button>
        <button className="btn operation plus" onClick={() => handleOperationClick('+')}>+</button>

        <button className="btn" onClick={() => handleNumberClick('4')}>4</button>
        <button className="btn" onClick={() => handleNumberClick('5')}>5</button>
        <button className="btn" onClick={() => handleNumberClick('6')}>6</button>

        <button className="btn" onClick={() => handleNumberClick('1')}>1</button>
        <button className="btn" onClick={() => handleNumberClick('2')}>2</button>
        <button className="btn" onClick={() => handleNumberClick('3')}>3</button>
        <button className="btn equals" onClick={calculate}>=</button>

        <button className="btn zero" onClick={() => handleNumberClick('0')}>0</button>
        <button className="btn" onClick={handleDecimal}>.</button>
      </div>
    </div>
  )
}

export default App
