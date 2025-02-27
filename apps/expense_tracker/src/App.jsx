import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import ExpenseChart from './components/ExpenseChart'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container mx-auto p-4'>
    <h1 className='text-2xl font-bold text-center'>Expense Tracker</h1>
      < ExpenseForm />
      <ExpenseList />
      <ExpenseChart />
    </div>
  )
}

export default App
