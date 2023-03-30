import { createContext, useContext, useState } from "react";

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)


const AppContext = (props) => {

  const [name, setName] = useState('kamil')
  const deneme = 'faikov'

  return <GlobalContext.Provider value={{name, setName, deneme}}>
    {props.children}
  </GlobalContext.Provider>
}
export default AppContext