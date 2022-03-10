import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { DashBoardRoutes } from './routes/DashBoardRoutes';
import { CoffeProvider } from './context/CoffeContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CoffeProvider>
        <DashBoardRoutes />
      </CoffeProvider>
    </div>
  )
}

export default App
