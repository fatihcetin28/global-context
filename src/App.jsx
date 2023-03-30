import './App.css'
import { useGlobalContext } from './context'

function App() {
  
  const { name, setName, deneme } = useGlobalContext()
  console.log(name);
  

  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={()=>setName(deneme)}>switch name</button>
    </div>
  )
}

export default App
