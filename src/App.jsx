import './App.css'
import { useGlobalContext } from './context'

function App() {
  
  const { name, setName } = useGlobalContext()
  console.log(name);
  

  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={()=>setName('Hasan')}>switch name</button>
    </div>
  )
}

export default App
